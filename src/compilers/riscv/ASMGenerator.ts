// adapted from Chocopy

import { ParserRuleContext } from "antlr4ts";
import { AstAssignment, AstBinaryExpression, AstBlock, AstConstExpression, AstExpression, AstFunctionCall, AstFunctionDeclaration, AstIf, AstNode, AstPrintf, AstRepl, AstReturn, AstStatement, AstVariableDeclaration, AstVariableExpression, AstWhile } from "../../ast/nodes";
import { ScopeStack } from "../../ast/scopeStack";
import { R, RiscvEmmiter } from "./emitter";

const WORD_SIZE = 4;

export class ASMGenerator {
  scopes: ScopeStack<llvm.Value, llvm.BasicBlock>;
  emitter: RiscvEmmiter;
  labelCount: number = 0;
  currentFunction: AstFunctionDeclaration;
  locals: Record<string,number>;

  constructor() {
    this.emitter = new RiscvEmmiter();
  }
  
  reset() {
    this.emitter.reset();
    this.labelCount = 0;
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
    this.scopes = new ScopeStack<llvm.Value, llvm.BasicBlock>();

    // this.analyze(root); // build symbol tables

    this.emitter.startData();
    // TODO

    this.emitter.startCode();
    this.emitter.emitGlobalLabel("main");

    this.visitRepl(root);

    return this.emitter.out;
  }

  // =================================================================================================================
  // top level AST nodes
  // =================================================================================================================

  visitRepl(node: AstRepl) {
    this.scopes.reset();

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

    this.emitter.emitLocalLabel(node.id);
    this.locals = {};
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
    this.visitBlock(node.body);
    this.emitter.emitComment(`${node.id} epilogue`);

    // Epilog
    this.emitter.emitLW(R.RA, R.FP, -1 * WORD_SIZE, "load saved RA");
    this.emitter.emitMV(R.T0, R.FP, "temp current FP (also = old SP)")
    this.emitter.emitLW(R.FP, R.FP, -2 * WORD_SIZE, "restore callers FP");
    this.emitter.emitMV(R.SP, R.T0, "restore caller's SP, deleting the callee AR")

    this.emitter.emitJR(R.RA, "jump back to caller (RA)");

    this.locals = {};
  }

  // =================================================================================================================
  // statement nodes
  // =================================================================================================================

  visitStatement(node: AstStatement) {
    if (node instanceof AstFunctionCall)
      return this.visitFunctionCall(node);
    else if (node instanceof AstBlock)
      return this.visitBlock(node);
    // else if (node instanceof AstAssignment)
    //   return this.visitAssignment(node);
    else if (node instanceof AstVariableDeclaration)
      return this.visitVariableDeclaration(node)
    else if (node instanceof AstReturn)
      return this.visitReturn(node);
    // else if (node instanceof AstPrintf)
    //   return this.visitPrintf(node);
    else if (node instanceof AstIf)
      return this.visitIf(node);
    // else if (node instanceof AstWhile)
    //   return this.visitWhile(node);
    else throw new Error();
  }

  visitFunctionCall(node: AstFunctionCall) {
    this.emitter.emitComment(`call ${node.funDecl.id}`);
                    
    //  AR Start:   Caller's FP   } Set by caller
    //              A3            } "
    //              A2            } "
    //    FP -->    A1            } "
    //              RA            ] Set by callee (RA is not set until after JAL)
    //    SP -->    Caller FP     ] "

    // Function argument[n] can be retrieved from (4*(n+1))(FP)
    // eg LW a0, 4(FP) => a0 = arg[0]

    // push params onto AR in reverse order
    this.emitter.emitADDI(R.SP, R.SP, -node.params.length*WORD_SIZE, `make stack space for ${node.funDecl.id} arguments`);
    node.params.reverse().forEach((p,i) => {
      this.visitExpression(p);
      this.emitter.emitSW(R.A0, R.SP, i*WORD_SIZE, `save function param ${i}:${node.funDecl.params[i].id} to stack`);
    });

    this.emitter.emitJAL(node.funDecl.id);
  }

  visitReturn(node: AstReturn) {
    this.visitExpression(node.returnExpression);
  }

  visitBlock(node: AstBlock) {
    let res;
    for (let i = 0; i < node.body.length; i++) {
      res = this.visitStatement(node.body[i]);
    }
    return res;
  }

  visitVariableDeclaration(node: AstVariableDeclaration) {
    // locals grow down from FP + 8 (to skip RA and CL)
    this.locals[node.id] = -3 * WORD_SIZE + Object.keys(this.locals).length * -4;
    if (node.initialExpression) {
      this.visitExpression(node.initialExpression);
      this.pushStack(R.A0, `push local var ${node.id} to stack and init value`);
    } else
      this.pushStack(R.ZERO, `push local var ${node.id} to stack and init to 0`);
  }

  visitAssignment(node: AstAssignment) {
    this.visitExpression(node.rhsExpression);
    const lhsID = node.lhsVariable.declaration.id
    const fpOffset = this.locals[lhsID] || this.currentFunction.params.findIndex(p => p.id == lhsID);
    this.emitter.emitSW(R.A0, R.FP, fpOffset, "save RHS to variable on stack")
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

    this.emitter.emitLocalLabel(this.newLabel("else"), "else label");
    this.visitBlock(node.elseBlock);
    this.emitter.emitJ(exitLabel, "jump to exit if");

    this.emitter.emitLocalLabel(thenLabel);
    this.visitBlock(node.thenBlock);

    this.emitter.emitLocalLabel(exitLabel);
  }

  // visitWhile(node: AstWhile) {
  //   const condition = llvm.BasicBlock.Create(this.context, "while.cond", this.currentFunction);
  //   const body = llvm.BasicBlock.Create(this.context, "while.body");
  //   const end = llvm.BasicBlock.Create(this.context, "while.end");

  //   this.builder.CreateBr(condition);
  //   this.builder.SetInsertPoint(condition);
  //   const conditionValue = this.visitExpression(node.testExpression);
  //   this.builder.CreateCondBr(conditionValue, body, end);

  //   this.currentFunction.addBasicBlock(body);
  //   this.builder.SetInsertPoint(body);

  //   this.visitBlock(node.block);

  //   if (!this.builder.GetInsertBlock().getTerminator()) {
  //     this.builder.CreateBr(condition);
  //   }

  //   this.currentFunction.addBasicBlock(end);
  //   this.builder.SetInsertPoint(end);
  // }

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
      throw new Error("String type not implemented")
    }
  }

  visitVariableExpression(node: AstVariableExpression) {
    const id = node.declaration.id;
    if (typeof this.locals[id] != "undefined")
      this.emitter.emitLW(R.A0, R.FP, this.locals[id], `retrieve local variable ${node.declaration.id}`);
    else {
      const argIndex = this.currentFunction.params.findIndex(p => id == p.id);
      this.emitter.emitLW(R.A0, R.FP, argIndex * WORD_SIZE, `retrieve param variable ${node.declaration.id}`);
    }
  }

  visitBinaryExpression(node: AstBinaryExpression) {
    
    this.visitExpression(node.lhs);  // accumulator will be saved to a0 = result of LHS
    this.pushStack(R.A0, "push a0 (LHS result) onto stack");
    
    this.visitExpression(node.rhs);  // accumulator will be saved to a0 = result of RHS
    this.emitter.emitLW(R.T1, R.SP, 0, "t1 = saved LHS");

    switch (node.op) {
      case "+" : this.emitter.emitADD(R.A0, R.T1, R.A0, "a0 = t1 (lhs) + a0 (rhs)"); break;
      case "-" : this.emitter.emitSUB(R.A0, R.T1, R.A0, "a0 = t1 (lhs) - a0 (rhs)"); break;
      case "==":
        this.emitter.emitSUB(R.A0, R.T1, R.A0, "a0 = t1 (lhs) - a0 (rhs)");
        this.emitter.emitSEQZ(R.A0, R.A0, "a0 = a0 (lhs-rhs) == 0");
        break;
      case "<":
        this.emitter.emitSLT(R.A0, R.T1, R.A0, "a0 = t1 (lhs) < a0 (rhs)");
        break;
      case ">=":
        this.emitter.emitSLT(R.A0, R.T1, R.A0, "a0 = t1 (lhs) < a0 (rhs)");
        this.emitter.emitNOT(R.A0, R.A0, "A0 = !A0 because >= is !<");
        break;
      case ">" :
        this.emitter.emitSLT(R.A0, R.A0, R.T1, "a0 = a0 (rhs) < t1 (lhs)");
        break;
      case "<=":
        this.emitter.emitSLT(R.A0, R.A0, R.T1, "a0 = a0 (rhs) < t1 (lhs)");
        this.emitter.emitNOT(R.A0, R.A0, "A0 = !A0 because <= is !>");
        break;
      default: throw new Error();
    }
    this.emitter.emitADDI(R.SP, R.SP, 4, "pop lhs off stack");
  }
}