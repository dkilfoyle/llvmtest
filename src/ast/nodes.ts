import { ParserRuleContext } from "antlr4ts";
import { Scope, ScopeStack } from "./scopeStack";
import { AllowedTypes, Signature } from "./signature";

export const errorNodes: AstNode[] = [];
let globalReturnResult: string | number | boolean; // todo better method
const globalAstScopeStack = new ScopeStack<VariableInstance>();

const debugging = true;
const debug = (msg: string, res?: string | number | boolean) => {
  if (debugging) console.log(msg, res ? res : "");
}

const getJavascriptType = (x: any) => {
  if (typeof (x) == "number") return "int";
  if (typeof (x) == "boolean") return "bool";
  if (typeof (x) == "string") return "string";
  return "unknown";
}

export class VariableInstance {
  id;
  type;
  value;
  constructor(id: string, type: AllowedTypes, initialValue?: string | number | boolean) {
    this.id = id;
    this.type = type;
    this.value = initialValue;
  }
}

// ================= base nodes

// class ExecuteResult {
//   parent: AstNode;
//   returnType: AllowedTypes;
//   returnValue: number | boolean | string;
//   constructor(parent:AstNode, returnType: AllowedTypes, returnValue?: number | boolean | string) {
//     this.parent = parent;
//     this.returnType = returnType;
//     this.returnValue = returnValue;
//   }
// }

export class AstNode {
  Location: [number, number, number, number];
  constructor(ctx?: ParserRuleContext) {
    if (ctx)
      this.Location = [ctx.start.line, ctx.start.charPositionInLine, ctx.stop.line, ctx.stop.charPositionInLine];
    else
      this.Location = [0, 0, 0, 0];
  }
  indent(n: number, s: string, nl: boolean = false) {
    return s.split("\n").filter(line => line != "").map(line => ' '.repeat(n) + line).join("\n");
  }
  toString(indent: number = 0) {
    return this.indent(indent, "AstNode(unimpl)");
  }
  isNull() {
    return false;
  }
  execute(): number | boolean | string { return "unimplemented" };
}

export class AstNull extends AstNode {
  constructor() {
    super();
  }
  toString(indent = 0) {
    return this.indent(indent, "AstNull()");
  }
  isNull() {
    return true;
  }
  execute() {
    return "null";
  }
}

export class AstError extends AstNode {
  errorMsg: string;
  constructor(ctx: ParserRuleContext, msg: string) {
    super(ctx);
    this.errorMsg = msg;
    errorNodes.push(this);
  }
  toString(indent = 0) {
    return this.indent(indent, `Error(${this.errorMsg})`);
  }
  execute() {
    // debug("AstError...")
    return "error";
  }
}

export class AstRepl extends AstNode {
  functions: AstFunctionDeclaration[];
  body: AstBlock;
  constructor(ctx: ParserRuleContext, functions: AstFunctionDeclaration[], body: AstBlock) {
    super(ctx);
    this.functions = functions;
    this.body = body;
  }
  toString() {
    return this.functions.map(funct => funct.toString()).join('\n') + "\n" + this.body.toString();
  }
  execute() {
    // debug("AstRepl...")
    globalAstScopeStack.reset();
    const res = this.body.execute();
    // debug("AstRepl result:", res);
    return res;
  }
}

// ============= statement nodes

export class AstBlock extends AstNode {
  body;
  returnExpression;
  constructor(ctx: ParserRuleContext, body: AstStatement[], returnExpression?: AstExpression) {
    super(ctx);
    this.body = body;
    this.returnExpression = returnExpression;
  }
  toString(indent: number = 0) {
    return this.indent(indent,
      `Block(
${this.body.map(node => node.toString(2)).join('\n')}
${this.returnExpression ? '  return ' + this.returnExpression.toString() : ""}
)`);
  }
  execute() {
    // debug("AstBlock...")
    for (let i = 0; i < this.body.length; i++) {
      let res = this.body[i].execute();
      if (res == 'return')
        return globalReturnResult;
    }
    const res = this.returnExpression ? this.returnExpression.execute() : "void"
    // debug("AstBlock result:", res)
    return res;
  }
}

export class AstStatement extends AstNode {
}

export class AstAssignment extends AstStatement {
  lhsVariable: AstVariableDeclaration;
  rhsExpression: AstExpression;
  constructor(ctx: ParserRuleContext, lhsVariable: AstVariableDeclaration, rhsExpression: AstExpression) {
    super(ctx);
    this.lhsVariable = lhsVariable;
    this.rhsExpression = rhsExpression;
  }
  toString(indent: number) {
    return this.indent(indent, `Assignment(${this.lhsVariable.id} = ${this.rhsExpression.toString()})`);
  }
  execute() {
    // debug("AstAssignment...")
    this.lhsVariable.setValue(this.rhsExpression.execute());
    return "void";
  }
}

export class AstFunctionCall extends AstStatement {
  funDecl: AstFunctionDeclaration;
  params: AstExpression[];
  constructor(ctx: ParserRuleContext, funDecl: AstFunctionDeclaration, params: AstExpression[]) {
    super(ctx);
    this.funDecl = funDecl;
    this.params = params;
  }
  toString(indent = 0) {
    return this.indent(indent, `Call(${this.funDecl.id}, ${this.params.map(param => param.toString()).join(',')})`);
  }
  returnType() {
    return this.funDecl.signature.returnType;
  }
  execute() {
    // debug(`AstFunctionCall(${this.funDecl.id})`)
    if (this.funDecl.id == 'assert') {
      let res = this.params[0].execute();
      console.log(`assert(${this.params[0].toString()}) is ${res}`);
      // debug("AstFunctionCall result: ", res)
      return res;
    }
    else if (this.funDecl.id == 'print') {
      console.log("stdout: ", this.params[0].execute());
      return 'void'
    } else {
      if (this.params.length != this.funDecl.params.length) throw new Error("functional call parameter mismatch");
      globalAstScopeStack.enterScope(this.funDecl.id);

      this.funDecl.params.forEach((funDeclParam, i) => {
        funDeclParam.execute(); // push an instance onto the scope stack
        funDeclParam.setValue(this.params[i]);
      });

      let res = this.funDecl.execute();
      globalAstScopeStack.disposeScope();
      // debug("--Result: ", res);
      return res;
    }
  };
}

export class AstIf extends AstStatement {
  ifExpression;
  thenBlock;
  elseBlock;
  constructor(ctx: ParserRuleContext, ifExpression: AstExpression, thenBlock: AstStatement, elseBlock?: AstStatement) {
    super(ctx);
    this.ifExpression = ifExpression;
    this.thenBlock = thenBlock;
    this.elseBlock = elseBlock;
  }
  toString(indent = 0, isElse = false) {
    return this.indent(indent,
      `if ${this.ifExpression.toString()} {
${this.thenBlock.toString(2)}
}`);
  }
  execute() {
    const test = this.ifExpression.execute();
    return test ?
      this.thenBlock.execute() :
      this.elseBlock.execute();
  }
}

export class AstCase extends AstNode {
  caseConstant;
  statements;
  hasBreak;
  constructor(ctx: ParserRuleContext, caseConstant: AstConstExpression, statements: AstBlock, hasBreak: boolean) {
    super(ctx);
    this.caseConstant = caseConstant;
    this.statements = statements;
    this.hasBreak = hasBreak;
  }
  toString(indent = 0) {
    return this.indent(indent,
      `case ${this.caseConstant.toString()} : ${this.statements.toString()}`)
  }
  execute() {
    this.statements.execute();
    return 'void';
  }
}

export class AstSwitch extends AstStatement {
  switchExpression;
  cases;
  defaultStatements;
  constructor(ctx: ParserRuleContext, switchExpression: AstExpression, cases: AstCase[], defaultStatements?: AstBlock) {
    super(ctx);
    this.switchExpression = switchExpression;
    this.cases = cases;
    this.defaultStatements = defaultStatements;
  }
  toString(indent = 0) {
    return this.indent(indent,
      `switch (${this.switchExpression.toString()}) {
${this.cases.map(c => c.toString(2) + "\n").join("\n")}
  default: ${this.defaultStatements ? this.defaultStatements.toString() : 'none'}
}
`);
  }
  execute() {
    const lhs = this.switchExpression.execute();
    let didBreak = false;
    for (let i = 0; i < this.cases.length; i++) {
      if (this.cases[i].caseConstant.execute() == lhs) {
        this.cases[i].execute();
        if (this.cases[i].hasBreak) {
          didBreak = true;
          break
        }
      }
    }
    if (!didBreak && this.defaultStatements) this.defaultStatements.execute();
    return "void";
  }
}

export class AstFor extends AstStatement {
  initialAssignment: AstStatement;
  testExpression: AstExpression;
  updateAssignement: AstStatement;
  block;
  constructor(ctx: ParserRuleContext, initialAssignment: AstStatement, testExpression: AstExpression, updateAssignement: AstStatement, block: AstStatement) {
    super(ctx);
    this.initialAssignment = initialAssignment;
    this.testExpression = testExpression;
    this.updateAssignement = updateAssignement;
    this.block = block;
  }
  toString(indent = 0) {
    return this.indent(indent,
      `for (${this.initialAssignment.toString()} ; ${this.testExpression.toString()} ; ${this.updateAssignement.toString()} )
${this.block.toString(2)}`);
  }
  execute() {
    this.initialAssignment.execute();
    while (this.testExpression.execute()) {
      this.block.execute();
      this.updateAssignement.execute();
    }
    return "void";
  }
}

export class AstWhile extends AstStatement {
  testExpression: AstExpression;
  block;
  constructor(ctx: ParserRuleContext, testExpression: AstExpression, block: AstStatement) {
    super(ctx);
    this.testExpression = testExpression;
    this.block = block;
  }
  toString(indent = 0) {
    return this.indent(indent,
      `while (${this.testExpression.toString()})
${this.block.toString(2)}`);
  }
  execute() {
    while (this.testExpression.execute()) {
      this.block.execute();
    }
    return "void";
  }
}

export class AstReturn extends AstStatement {
  returnExpression;
  constructor(ctx: ParserRuleContext, returnExpression: AstExpression) {
    super(ctx);
    this.returnExpression = returnExpression;
  }
  toString(indent = 0) {
    return this.indent(indent,
      `return ${this.returnExpression.toString()}`);
  }
  execute() {
    globalReturnResult = this.returnExpression.execute();
    return "return";
  }
}

// =============== Expression nodes

export class AstExpression extends AstNode {
  returnType() { return "unknown" };
};

export class AstErrorExpression extends AstNode {
  msg: string;
  constructor(ctx: ParserRuleContext, msg: string) {
    super(ctx);
    this.msg = msg;
    errorNodes.push(this);
  }
  returnType() { return "error" };
}

export class AstUnaryExpression extends AstExpression {
  rhs: AstExpression;
  op: string;
  constructor(ctx: ParserRuleContext, op: string, rhs: AstExpression) {
    super(ctx);
    this.op = op;
    this.rhs = rhs;
  }
  toString(indent: number = 0) {
    return this.indent(indent, `Op(${this.op} ${this.rhs.toString()})`);
  }
  returnType() {
    if (this.op == "-") return "int";
    if (this.op == "!") return "bool";
    return "unknown";
  }
  execute() {
    if (this.op == "-") {
      const rhsRes = Number(this.rhs.execute());
      return rhsRes * -1;
    }
    if (this.op == "!") {
      const rhsRes = Boolean(this.rhs.execute());
      return !rhsRes;
    }
    throw new Error();
  }
}

export class AstBinaryExpression extends AstExpression {
  lhs: AstExpression;
  rhs: AstExpression;
  op: string;
  constructor(ctx: ParserRuleContext, op: string, lhs: AstExpression, rhs: AstExpression) {
    super(ctx);
    this.op = op;
    this.lhs = lhs;
    this.rhs = rhs;
  }
  toString(indent: number = 0) {
    return this.indent(indent, `Op(${this.lhs.toString()} ${this.op} ${this.rhs.toString()})`);
  }
  returnType() {
    if (["+", "-", "*", "/", "%", "^"].includes(this.op)) return "int"; // TODO - should check type of LHS and RHS to see if int or float
    if (["<=", "<", ">=", ">", "==", "!=", "&&", "||"].includes(this.op)) return "bool";
    return "unknown";
  }
  execute() {
    const lhsRes = Number(this.lhs.execute());
    const rhsRes = Number(this.rhs.execute());
    switch (this.op) {
      case "^": return lhsRes ** rhsRes;
      case "+": return lhsRes + rhsRes;
      case "-": return lhsRes - rhsRes;
      case "*": return lhsRes * rhsRes;
      case "/": return lhsRes / rhsRes;
      case "%": return lhsRes % rhsRes;
      case "<": return lhsRes < rhsRes;
      case ">": return lhsRes > rhsRes;
      case "<=": return lhsRes <= rhsRes;
      case ">=": return lhsRes >= rhsRes;
      case "==": return lhsRes == rhsRes;
      case "!=": return lhsRes != rhsRes;
      case "&&": return Boolean(lhsRes && rhsRes);
      case "||": return Boolean(lhsRes || rhsRes);
      default: throw new Error();
    }
  }
}

export class AstConstExpression extends AstExpression {
  value;
  valueType;
  constructor(ctx: ParserRuleContext, value: number | boolean | string | null, valueType: "int" | "bool" | "string" | "null") {
    super(ctx);
    this.value = value;
    this.valueType = valueType;
  }
  toString() {
    return `Const(${this.value})`;
  }
  returnType() { return this.valueType };
  execute() {
    return this.value;
  }
}

export class AstIdentifierExpression extends AstExpression {
  declaration;
  constructor(ctx: ParserRuleContext, declarataion: AstVariableDeclaration | AstUndeclaredError) {
    super(ctx);
    this.declaration = declarataion;
  }
  toString(indent = 0) {
    return this.indent(indent, `Identifier(${this.declaration.id})`);
  }
  returnType() {
    return this.declaration.signature.returnType;
  }
  execute() {
    return this.declaration.getValue();
  }
}

export class AstBracketExpression extends AstExpression {
  expr: AstExpression;
  constructor(ctx: ParserRuleContext, expr: AstExpression) {
    super(ctx);
    this.expr = expr;
  }
  toString(indent = 0) {
    return this.indent(indent, `Bracket(${this.expr.toString()})`);
  }
  returnType() {
    return this.expr.returnType();
  }
}

// ==================== Named declarations (on stack)

export class AstIdentifierDeclaration extends AstNode {
  id: string;
  signature: Signature;
  constructor(ctx: ParserRuleContext, id: string) {
    super(ctx);
    this.id = id;
  }
}

export class AstVariableDeclaration extends AstIdentifierDeclaration {
  initialExpression: AstExpression;
  ctx: ParserRuleContext;
  constructor(ctx: ParserRuleContext, id: string, type: AllowedTypes, initialExpression?: AstExpression) {
    super(ctx, id);
    this.ctx = ctx;
    this.signature = new Signature('var', type);
    this.initialExpression = initialExpression;
  }
  toString(indent: number = 0) {
    return this.indent(indent, `VariableDeclaration(${this.signature.returnType}: ${this.id})`);
  }
  setValue(newValue: any) {
    if (getJavascriptType(newValue) == this.signature.returnType) {
      const [found, x] = globalAstScopeStack.getSymbol(this.id);
      if (found) (x as VariableInstance).value = newValue; else throw new Error(`variable instance ${this.id} not in scope`);
    }
    else
      throw new Error();
  }
  getValue() {
    const [found, x] = globalAstScopeStack.getSymbol(this.id);
    if (found) return (x as VariableInstance).value; else throw new Error(`variable instance ${this.id} not in scope`);
  }
  execute() {
    // push an instance of this variable onto the stack
    globalAstScopeStack.setSymbol(this.id,
      new VariableInstance(this.id, this.signature.returnType, this.initialExpression?.execute()))
    return "void";
  }
}

export class AstFunctionDeclaration extends AstIdentifierDeclaration {
  params: AstVariableDeclaration[];
  body: AstBlock
  constructor(ctx: ParserRuleContext, returnType: AllowedTypes | 'void', id: string, params: AstVariableDeclaration[], body?: AstBlock) {
    super(ctx, id);
    this.params = params;
    this.body = body;
    this.signature = new Signature('fun', returnType, params.map(param => param.signature.returnType))
  }
  toString(indent = 0) {
    if (!this.body) return ""; // stdlib
    return this.indent(indent,
      `Function(${this.id}, ${this.params.map(param => param.toString()).join(',')})
${this.body ? this.body.toString(2) : '  StdLib'}
)`);
  }
  execute() {
    return this.body.execute();
  }
}

export class AstUndeclaredError extends AstIdentifierDeclaration {
  constructor(ctx: ParserRuleContext, id: string) {
    super(ctx, id);
  }
  toString(indent = 0) {
    return this.indent(indent, `Symbol ${this.id} undeclared`);
  }
}

