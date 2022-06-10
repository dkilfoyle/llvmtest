// adapted from Chocopy

import { ParserRuleContext } from "antlr4ts";
import { AstArrayDeclaration, AstAssignment, AstBinaryExpression, AstBlock, AstConstExpression, AstExpression, AstFunctionCall, AstFunctionDeclaration, AstIdentifierDeclaration, AstIf, AstNode, AstPrintf, AstRepl, AstReturn, AstStatement, AstVariableDeclaration, AstVariableExpression, AstWhile } from "../../languages/simpleC/nodes";
import { Scope, ScopeStack } from "../../languages/simpleC/scopeStack";
import { R, RiscvEmmiter } from "./emitter";

// Optimisations?
// 1. for leaf functions (do not call other functions) pass parameters as registers and no prolog/epilog
// 

const WORD_SIZE = 4;

interface LocalVariable {
  spoffset?: number,
  fpoffset: number,
  size: number
}

interface LocalScope {
  FP: number, // the SP at the entry point of the block
  SP: number, // positive or negative offset from *local* FP
  // if the scope is at function level then
  // a. stack grows positive from 0(FP) for function arguments
  // b. stack grows negative from -8(FP) for function locals
  // otherwise stack grows negative from 0(FP) 
}

class LocalScopeStack extends ScopeStack<LocalVariable, LocalScope> {
  pushFunctionParams(node: AstFunctionDeclaration) {
    // FP+8    Arg2
    // FP+4    Arg1
    // FP+0 -> Arg0
    node.params.forEach((p,i) => {
      this.newSymbol(p.id, { fpoffset: i*WORD_SIZE, size: WORD_SIZE })
    })
  }
  pushLocal(name:string, size:number) {
    // myfun() {
    //   int x = 10;
    //   int y = 5;
    //   while (x>0) {
    //     int z = 2;
    //     x = x - 1;
    //     print_int(x);
    //   }
    // }
    // FP+0  Arg0
    // FP-4  CallerFP
    // FP-8  RA             BlockFP =-8 (enterFunction FP=-8)
    // FP-12 Local0         BlockSP =-4  offset=-8-4=-12           int x = 10;
    // FP-16 Local1         BlockSP =-8  offset=-8-8=-16           int y = 5;
    //                        BlockFP = -16 (enterBlock FP = topFP + topSP = -8 + -8 = -16)
    // FP-20   Local0         BlockSP = -4  offset=-16-4=-20       int z = 2;
    const top = this.top();
    top.context.SP -= size;
    const localVar = { spoffset: top.context.SP, fpoffset: top.context.FP + top.context.SP, size } 
    this.newSymbol(name, localVar);
    return localVar;
  }
  popLocal() {
    const top = this.top();
    const lastKey = Object.keys(top.entries)[Object.keys(top.entries).length-1];
    top.context.SP += this.getLocalVarOffset(lastKey).size;
    delete top.entries[lastKey];
  }
  getLocalVarOffset(id:string) {
    const [found, localVar] = this.getSymbol(id);
    if (!found) throw new Error();
    return localVar
  }
  enterFunction(name:string) {
    // FP: is the SP (relative to function FP) at block entry.
    // It will be -2*WORD_SIZE after the AR has been pushed
    return this.enterScope(`function ${name}`, { FP: -2*WORD_SIZE, SP: 0 });
  }
  enterBlock(name:string) {
    const parentContext = this.top().context;
    this.enterScope(name, { FP:parentContext.FP + parentContext.SP, SP:0 });
  }
}

interface GlobalVar {
  label: string;
  type: string;
  value: string;
}

export class ASMGenerator {
  emitter: RiscvEmmiter;
  labelCount: number = 0;
  currentFunction: AstFunctionDeclaration;
  scopeStack: LocalScopeStack;
  dataSection: GlobalVar[];

  constructor() {
    this.emitter = new RiscvEmmiter();
    this.scopeStack = new LocalScopeStack();
    this.dataSection = [];
  }
  
  reset() {
    this.emitter.reset();
    this.scopeStack.reset();
    this.labelCount = 0;
    this.dataSection = [];
  }

  newLabel(stub:string="") {
    this.labelCount = this.labelCount + 1;
    return stub+this.labelCount;
  }

  // RiscV convention
  // Stack grows downwards (smaller memory addresses)
  // Stack pointer is full (points to the last occupied slot)
  
  pushStack(rs:R, comment?:string) {
    this.emitter.emitADDI(R.SP, R.SP, -4), "grow stack";
    this.emitter.emitSW(rs, R.SP, 0, comment);
  }
  
  popStack(comment: string="pop top of stack to A0") {
    this.emitter.emitADDI(R.SP, R.SP, 4), "shrink stack";
    this.emitter.emitLW(R.A0, R.SP, 0, comment);
  }

  codegen(root:AstNode) {
    if (!(root instanceof AstRepl)) throw new Error();
    this.reset();

    this.emitter.startCode();
    this.emitter.emitGlobalLabel("main");

    this.visitRepl(root);

    this.emitter.startData();
    this.dataSection.forEach(globalvar => {
      this.emitter.emitGlobalVar(globalvar.label, globalvar.type, globalvar.value);
    })

    return this.emitter.out;
  }

  // =================================================================================================================
  // top level AST nodes
  // =================================================================================================================

  visitRepl(node: AstRepl) {
    this.scopeStack.reset();

    // top level statements (AST wraps in main)
    const topLevelMain = node.functions[node.functions.length-1];
    this.visitFunctionDeclaration(topLevelMain);

    // all the others
    node.functions.slice(0, node.functions.length-1).forEach(funDecl => this.visitFunctionDeclaration(funDecl));
  }


  visitFunctionDeclaration(node: AstFunctionDeclaration) {
    if (!node.body) {
      // TODO: extern function
      return;
    }

    // add a new scope for the function. SP starts at -2*WORD_SIZE to accomodate saved FP and RA
    const scope = this.scopeStack.enterFunction(node.id);

    // add function parameters to function scope
    this.scopeStack.pushFunctionParams(node);

    this.emitter.emitLocalLabel(node.id);
    this.currentFunction = node;

    // preface: the caller will have resulted in state
    // Arg1  <--- Caller FP
    // ....
    // Arg3
    // Arg2
    // Arg1  <--- SP

    // prolog: now becomes
    // Arg1  <--- old SP             ====> new FP (args will be at 0(FP), 4(FP), 8(FP)... )
    // RA                            
    // Caller FP = dynamic link      ====> new SP
    this.emitter.emitADDI(R.SP, R.SP, -2 * WORD_SIZE, "Make space for start of AR");
    this.emitter.emitSW(R.FP, R.SP, 0, "Save caller's FP");
    this.emitter.emitSW(R.RA, R.SP, WORD_SIZE, "Save caller's RA");
    this.emitter.emitADDI(R.FP, R.SP, 2 * WORD_SIZE, "New FP is at old SP");

    this.emitter.emitComment(`${node.id} body`);
    this.visitBlock(node.body, `${node.id} body`, scope);
    this.emitter.emitComment(`${node.id} epilogue`);

    // Epilog
    this.emitter.emitLW(R.RA, R.FP, -1 * WORD_SIZE, "load saved RA");
    this.emitter.emitMV(R.T0, R.FP, "temp current FP (also = old SP)")
    this.emitter.emitLW(R.FP, R.FP, -2 * WORD_SIZE, "restore callers FP");
    this.emitter.emitMV(R.SP, R.T0, "restore caller's SP, deleting the callee AR")

    this.emitter.emitJR(R.RA, "jump back to caller (RA)");

  }

  // =================================================================================================================
  // statement nodes
  // =================================================================================================================

  visitStatement(node: AstStatement) {
    if (node instanceof AstFunctionCall)
      this.visitFunctionCall(node);
    else if (node instanceof AstBlock)
      this.visitBlock(node);
    else if (node instanceof AstAssignment)
      this.visitAssignment(node);
    else if (node instanceof AstVariableDeclaration)
      this.visitVariableDeclaration(node)
    // else if (node instanceof AstArrayDeclaration)
    //   this.visitArrayDeclaration(node)
    else if (node instanceof AstReturn)
      this.visitReturn(node);
    // else if (node instanceof AstPrintf)
    //   return this.visitPrintf(node);
    else if (node instanceof AstIf)
      this.visitIf(node);
    else if (node instanceof AstWhile)
      this.visitWhile(node);
    else throw new Error();
  }

  visitFunctionCall(node: AstFunctionCall) {

    if (node.funDecl.id == "print_int") {
      this.visitExpression(node.params[0]);
      this.emitter.emitMV(R.A1, R.A0, "Move A0 to A1 to be argument for print_int ecall");
      this.emitter.emitLI(R.A0, 1, "print_int ecall");
      this.emitter.emitECALL();
      return;
    }

    if (node.funDecl.id == "print_string") {
      this.visitExpression(node.params[0]);
      this.emitter.emitMV(R.A1, R.A0, "Move A0 to A1 to be argument for print_string ecall");
      this.emitter.emitLI(R.A0, 4, "print_string ecall");
      this.emitter.emitECALL();
      return;
    }

    this.emitter.emitComment(`call ${node.toCode()}`);
                    
    //  AR Start:   Caller's FP   } Set by caller
    //              A3            } "
    //              A2            } "
    //    FP -->    A1            } "
    //              RA            ] Set by callee (RA is not set until after JAL)
    //    SP -->    Caller FP     ] "

    // Function argument[n] can be retrieved from (4*(n+1))(FP)
    // eg LW a0, 4(FP) => a0 = arg[0]

    // push params onto AR in reverse order
    if (node.params.length) {
      // this.emitter.emitADDI(R.SP, R.SP, -node.params.length*WORD_SIZE, `make stack space for ${node.funDecl.id} ${-node.params.length*WORD_SIZE} arguments`);
      node.params.reverse().forEach((p,i) => {
        this.visitExpression(p);
        this.scopeStack.pushLocal(this.newLabel("param"), 4);
        this.pushStack(R.A0,  `save function param ${i}:${node.funDecl.params[i].id} to stack`);
        // this.emitter.emitSW(R.A0, R.SP, i*WORD_SIZE, `save function param ${i}:${node.funDecl.params[i].id} to stack`);
      });
    }

    this.emitter.emitJAL(node.funDecl.id);
  }

  visitReturn(node: AstReturn) {
    this.visitExpression(node.returnExpression);
  }

  visitBlock(node: AstBlock, label: string="", functionScope?: Scope<LocalVariable, LocalScope>) {
    if (!functionScope) this.scopeStack.enterBlock(label);
   
    // preprocess all block level local variable declarations to build scope
    for (let statement of node.body) {
      if (statement instanceof AstVariableDeclaration) {
        this.scopeStack.pushLocal(statement.id, statement.signature.getByteSize()); 
      }
    }
    
    // grow the stack to make space for the locals
    const scope = this.scopeStack.top();
    if (scope.context.SP <0) {
      this.emitter.emitADDI(R.SP, R.SP, scope.context.SP, `reserve stack space for ${Object.keys(scope.entries).length} locals ${Object.keys(scope.entries)}`);
    } else this.emitter.emitComment("no locals to reserve stack for")

    for (let statement of node.body) {
      this.visitStatement(statement);
    }

    if (scope.context.SP < 0)
      this.emitter.emitADDI(R.SP, R.FP, this.scopeStack.top().context.FP, `pop all ${label} locals off stack by setting SP to FP (SP at block start)`);
    else
      this.emitter.emitComment("no locals to pop off stack")

    this.scopeStack.disposeScope();
  }

  visitVariableDeclaration(node: AstVariableDeclaration) {
    // get offset from scope
    const offset = this.scopeStack.getLocalVarOffset(node.id);

    if (node.initialExpression) {
      this.visitExpression(node.initialExpression);
      this.emitter.emitSW(R.A0, R.FP, offset.fpoffset, `push local var ${node.id} to stack and init value`);
    } else
      this.emitter.emitSW(R.ZERO, R.FP, offset.fpoffset, `push local var ${node.id} to stack and init to 0`);
  }

  // visitArrayDeclaration(node: AstArrayDeclaration) {
  //   // locals grow down from FP + 8 (to skip RA and CL)
  //   this.locals[node.id] = -3 * WORD_SIZE + Object.keys(this.locals).length * -4;
  //   if (node.initialExpression) {
  //     this.visitExpression(node.initialExpression);
  //     this.pushStack(R.A0, `push local var ${node.id} to stack and init value`);
  //   } else
  //     this.pushStack(R.ZERO, `push local var ${node.id} to stack and init to 0`);
  // }

  visitAssignment(node: AstAssignment) {
    this.visitExpression(node.rhsExpression);
    const lhsID = node.lhsVariable.declaration.id
    // const fpOffset = this.locals[lhsID] || this.currentFunction.params.findIndex(p => p.id == lhsID);
    const offset = this.scopeStack.getLocalVarOffset(lhsID);
    this.emitter.emitSW(R.A0, R.FP, offset.fpoffset, "save RHS to variable on stack")
  }

  // visitPrintf(node: AstPrintf) {
  //   const vargs = node.args.map(arg => this.visitExpression(arg));
  //   this.builder.CreateCall(this.module.getFunction("printf"), [this.builder.CreateGlobalStringPtr(node.format.replace("\\n", "\x0a")), ...vargs], "printfcall")
  // }

  visitIf(node: AstIf) {
    const thenLabel = this.newLabel("then");
    const exitLabel = this.newLabel("exitIf");

    this.visitExpression(node.ifExpression);
    this.emitter.emitBNEZ(R.A0, thenLabel, "if true jump to then");

    if (node.elseBlock) {
      this.emitter.emitLocalLabel(this.newLabel("else"), "else label");
      if (node.elseBlock instanceof AstBlock)
        this.visitBlock(node.elseBlock, "if else");
      else
        this.visitStatement(node.elseBlock);
    }
    this.emitter.emitJ(exitLabel, "jump to exit if");

    this.emitter.emitLocalLabel(thenLabel);
    if (node.thenBlock instanceof AstBlock)
      this.visitBlock(node.thenBlock, "if then");
    else
      this.visitStatement(node.thenBlock);

    this.emitter.emitLocalLabel(exitLabel);
  }

  visitWhile(node: AstWhile) {
    const testLabel = this.newLabel("whiletest");
    const exitLabel = this.newLabel("exitwhile");

    this.emitter.emitLocalLabel(testLabel);
    this.visitExpression(node.testExpression);
    this.emitter.emitBEQZ(R.A0, exitLabel, "if not true exit loop");

    if (node.block instanceof AstBlock)
      this.visitBlock(node.block, "while block");
    else
      this.visitStatement(node.block);

    this.emitter.emitJ(testLabel, "loop back to test");

    this.emitter.emitLocalLabel(exitLabel);
  }

  // =================================================================================================================
  // EXPRESSION nodes
  // =================================================================================================================

  visitExpression(node: AstExpression) {
    if (node instanceof AstConstExpression)
      return this.visitConstExpression(node);
    else if (node instanceof AstBinaryExpression)
      return this.visitBinaryExpression(node);
    else if (node instanceof AstVariableExpression)
      return this.visitVariableExpression(node);
    else if (node instanceof AstFunctionCall)
      return this.visitFunctionCall(node);
    else throw new Error();
  }

  visitConstExpression(node: AstConstExpression) {
    // return llvm.ConstantInt.get(this.context, node.value);
    if (node.returnType() == "int")
      this.emitter.emitLI(R.A0, node.value, `Load constant ${node.value} to a0`);
    else if (node.returnType() == "string") {
      const label = this.newLabel("stringconst");
      this.dataSection.push({label, type:"asciiz", value:node.value});
      this.emitter.emitLA(R.A0, label, "Load address of string const in data section");
    }
  }

  visitVariableExpression(node: AstVariableExpression) {
    const id = node.declaration.id;
    const offset = this.scopeStack.getLocalVarOffset(id).fpoffset
    this.emitter.emitLW(R.A0, R.FP, offset, `retrieve ${offset<=0 ? "func param" : "local variable"} ${node.declaration.id}`);
    // if (typeof this.locals[id] != "undefined")
    //   this.emitter.emitLW(R.A0, R.FP, this.locals[id], `retrieve local variable ${node.declaration.id}`);
    // else {
    //   const argIndex = this.currentFunction.params.findIndex(p => id == p.id);
    //   this.emitter.emitLW(R.A0, R.FP, argIndex * WORD_SIZE, `retrieve param variable ${node.declaration.id}`);
    // }
  }

  visitBinaryExpression(node: AstBinaryExpression) {
    // compute LHS, save result to stack
    this.visitExpression(node.lhs);  // accumulator will be saved to a0 = result of LHS
    const lhsTempLabel = this.newLabel("LHSTemp")
    const offset = this.scopeStack.pushLocal(lhsTempLabel, 4);
    this.pushStack(R.A0, `push a0 (LHS result of ${node.lhs.toCode()}) onto stack as ${lhsTempLabel} ${offset.fpoffset}`);

    // compute RHS, result in A0
    this.visitExpression(node.rhs);  // accumulator will be saved to a0 = result of RHS

    // retrieve LHS in T1
    this.emitter.emitLW(R.T1, R.FP, this.scopeStack.getLocalVarOffset(lhsTempLabel).fpoffset, `t1 = saved LHS (${lhsTempLabel})`);

    switch (node.op) {
      case "+" : this.emitter.emitADD(R.A0, R.T1, R.A0, `a0 = t1 + a0 (${node.lhs.toCode()}) + ${node.rhs.toCode()})`); break;
      case "-" : this.emitter.emitSUB(R.A0, R.T1, R.A0, `a0 = t1 - a0 (${node.lhs.toCode()}) - ${node.rhs.toCode()})`); break;
      case "==":
        this.emitter.emitSUB(R.A0, R.T1, R.A0, `a0 = t1 - a0 (${node.lhs.toCode()}) - ${node.rhs.toCode()})`);
        this.emitter.emitSEQZ(R.A0, R.A0, "a0 = a0 (lhs-rhs) == 0");
        break;
      case "<":
        this.emitter.emitSLT(R.A0, R.T1, R.A0, `a0 = t1 < a0 (${node.lhs.toCode()} < ${node.rhs.toCode()})`);
        break;
      case ">=":
        this.emitter.emitSLT(R.A0, R.T1, R.A0, `a0 = t1 < a0 (${node.lhs.toCode()} < ${node.rhs.toCode()})`);
        this.emitter.emitNOT(R.A0, R.A0, "A0 = !A0 because >= is !<");
        break;
      case ">" :
        this.emitter.emitSLT(R.A0, R.A0, R.T1, `a0 = a0 < t1 (equiv a0 > t1) (${node.lhs.toCode()} > ${node.rhs.toCode()})`);
        break;
      case "<=":
        this.emitter.emitSLT(R.A0, R.A0, R.T1, `a0 = a0 (rhs: ${node.rhs.toCode()}) < t1 (lhs: ${node.lhs.toCode()})`);
        this.emitter.emitNOT(R.A0, R.A0, "A0 = !A0 because <= is !>");
        break;
      default: throw new Error();
    }
    this.emitter.emitADDI(R.SP, R.SP, 4, `pop lhs temporary ${lhsTempLabel} off stack`);
    this.scopeStack.popLocal();
  }
}