import { ParserRuleContext } from "antlr4ts";
import llvm from "llvm-bindings";
import { threadId } from "worker_threads";
import { AstAssignment, AstBinaryExpression, AstBlock, AstConstExpression, AstExpression, AstFunctionDeclaration, AstNode, AstRepl, AstReturn, AstStatement, AstVariableDeclaration, AstVariableExpression } from "./ast/nodes";
import { ScopeStack } from "./ast/scopeStack";

export class IRGenerator {
  context: llvm.LLVMContext;
  module: llvm.Module;
  builder: llvm.IRBuilder;
  scopes: ScopeStack<llvm.Value, llvm.BasicBlock>;
  constructor() {
  }
  reset() {
    this.context = new llvm.LLVMContext();
    this.module = new llvm.Module('demo', this.context);
    this.builder = new llvm.IRBuilder(this.context);
  }
  codegen(root:AstNode) {
    if (!(root instanceof AstRepl)) throw new Error();
    this.reset();
    this.scopes = new ScopeStack<llvm.Value, llvm.BasicBlock>();
    this.visitRepl(root);
    return this.module.print();
  }

  createBlock(parent:llvm.Function) {
    const block = llvm.BasicBlock.Create(this.context, "entry", parent);
    this.builder.SetInsertPoint(block);
    this.scopes.enterScope("block", block);
    return block;
  }

  getLLVMType(type: string) {
    switch (type) {
      case "int" : return this.builder.getInt32Ty();
      case "void" : return this.builder.getVoidTy();
      case "bool" : return this.builder.getInt1Ty();
      case "string" : return this.builder.getInt8PtrTy();
      default: throw new Error("Unsupported type");
    }
  }

  visitRepl(node: AstRepl) {
    this.scopes.reset();
    node.functions.forEach(funDecl => this.visitFunctionDeclaration(funDecl));
  }

  visitFunctionDeclaration(node: AstFunctionDeclaration) {
    if (!node.body) {
      // TODO: extern function
      return;
    }

    let funReturnType = this.getLLVMType(node.signature.returnType);
    const args = node.signature.paramTypes.map(p => this.getLLVMType(p));

    const funType = llvm.FunctionType.get(funReturnType, args, false);
    const fun = llvm.Function.Create(funType, llvm.Function.LinkageTypes.ExternalLinkage, node.id, this.module);
    const block = this.createBlock(fun);
    const res = this.visitBlock(node.body);
    this.builder.CreateRet(block);
    this.scopes.disposeScope();
    // if (llvm.verifyFunction(fun)) throw new Error("visitFunctionDeclaration codegen failed")
  }

  visitBlock(node: AstBlock) {
    let res;
    for (let i = 0; i < node.body.length; i++) {
      res = this.visitStatement(node.body[i]);
    }
    return res;
  }

  visitStatement(node: AstStatement) {
    if (node instanceof AstAssignment)
      return this.visitAssignment(node);
    else if (node instanceof AstVariableDeclaration)
      return this.visitVariableDeclaration(node)
    else if (node instanceof AstReturn)
      return this.visitReturn(node);
    else throw new Error();
  }

  visitVariableDeclaration(node: AstVariableDeclaration) {
    const type = this.getLLVMType(node.signature.returnType);
    const alloc = this.builder.CreateAlloca(type, null, node.id);
    this.scopes.newSymbol(node.id, alloc);
    if (node.initialExpression)
      this.visitAssignment(
        new AstAssignment(
          new ParserRuleContext(),
          new AstVariableExpression(new ParserRuleContext(), node),
          node.initialExpression
        )
      );
    return alloc;
  }

  visitAssignment(node: AstAssignment) {
    let [found, x] = this.scopes.getSymbol(node.lhsVariable.declaration.id);
    if (!found) throw new Error();
    const rhs = this.visitExpression(node.rhsExpression);
    return this.builder.CreateStore(rhs, x);
  }

  visitReturn(node: AstReturn) {
    return this.builder.CreateRet(this.visitExpression(node.returnExpression));
  }

  visitVariableExpression(node: AstVariableExpression) {
    let [found, x] = this.scopes.getSymbol(node.declaration.id);
    if (!found) throw new Error();
    return this.builder.CreateLoad(this.getLLVMType(node.returnType()), x);
  }

  visitExpression(node: AstExpression) {
    if (node instanceof AstConstExpression)
      return this.visitConstExpression(node);
    else if (node instanceof AstBinaryExpression)
      return this.visitBinaryExpression(node);
    else if (node instanceof AstVariableExpression)
      return this.visitVariableExpression(node);
    else throw new Error();
  }

  visitConstExpression(node: AstConstExpression) {
    // return llvm.ConstantInt.get(this.context, node.value);
    return this.builder.getInt32(node.value);
  }

  visitBinaryExpression(node: AstBinaryExpression) {
    switch (node.op) {
      case "+" : return this.builder.CreateAdd(this.visitExpression(node.lhs), this.visitExpression(node.rhs));
      default: throw new Error();
    }
  }
}

