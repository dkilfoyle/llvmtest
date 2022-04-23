import { ParserRuleContext } from "antlr4ts";
import { Scope } from "./scopeStack";
import { AllowedTypes, Signature } from "./signature";

export const errorNodes: AstNode[] = [];

// ================= base nodes

export class AstNode {
  Location: [number, number, number, number];
  constructor(ctx?: ParserRuleContext) {
    if (ctx)
      this.Location = [ctx.start.line, ctx.start.charPositionInLine, ctx.stop.line, ctx.stop.charPositionInLine];
    else
      this.Location = [0,0,0,0];
  }
  indent(n:number, s:string, nl:boolean=false) {
    return s.split("\n").filter(line=>line != "").map(line => ' '.repeat(n) + line).join("\n");
  }
  toString(indent:number=0) {
    return this.indent(indent, "AstNode(unimpl)");
  }
  isNull() {
    return false;
  }
}

export class AstNull extends AstNode {
  constructor() {
    super();
  }
  toString(indent=0) {
    return this.indent(indent, "AstNull()");
  }
  isNull() {
    return true;
  }
}

export class AstError extends AstNode {
  errorMsg:string;
  constructor(ctx:ParserRuleContext, msg:string) {
    super(ctx);
    this.errorMsg = msg;
    errorNodes.push(this);
  }
  toString(indent=0) {
    return this.indent(indent, `Error(${this.errorMsg})`);
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
}

// ============= statement nodes

export class AstBlock extends AstNode {
  body: AstStatement[];
  returnVal: AstExpression | AstNull;
  constructor(ctx: ParserRuleContext, body: AstStatement[], returnVal?: AstExpression | AstNull) {
    super(ctx);
    this.body = body;
    this.returnVal = returnVal;
  }
  toString(indent:number=0) {
    return this.indent(indent, 
`Block(
${this.body.map(node => node.toString(2)).join('\n')}
  Return(${this.returnVal.toString()})
)`);
  } 
}

export class AstStatement extends AstNode {
}

export class AstAssignment extends AstStatement {
  id: string;
  expression: AstNode;
  constructor(ctx: ParserRuleContext, id: string, expression: AstNode) {
    super(ctx);
    this.id = id;
    this.expression = expression;
  }
  toString(indent:number) {
    return this.indent(indent, `Assignment(${this.id} = ${this.expression.toString()})`);
  }
}

export class AstFunctionCall extends AstStatement {
  id: string;
  params: AstNode[];
  constructor(ctx: ParserRuleContext, id: string, params: AstNode[]) {
    super(ctx);
    this.id = id;
    this.params = params;
  }
  toString(indent=0) {
    return this.indent(indent, `Call(${this.id}, ${this.params.map(param => param.toString()).join(',')})`);
  }
}

export class AstIf extends AstStatement {
  ifExpression: AstExpression;
  thenBlock: AstBlock;
  constructor(ctx:ParserRuleContext, ifExpression:AstExpression, thenBlock:AstBlock) {
    super(ctx);
    this.ifExpression = ifExpression;
    this.thenBlock = thenBlock;
  }
  toString(indent=0, isElse=false) {
    return this.indent(indent, 
`if ${this.ifExpression.toString()} {
${this.thenBlock.toString(2)}
}`);
  }
}
export class AstIfElse extends AstStatement {
  ifs: AstIf[];
  elseBlock: AstBlock | AstNull;
  constructor(ctx:ParserRuleContext, ifs:AstIf[], elseBlock:AstBlock | AstNull) {
    super(ctx);
    this.ifs = ifs;
    this.elseBlock = elseBlock;
  }
  toString(indent=0) {
    return [
      ...this.ifs.map((ifn,i) => ifn.toString(indent,i>0)),
      "\n",
      !this.elseBlock.isNull() ? this.elseBlock.toString(indent) : ""
    ].join("");
  }
}

export class AstFor extends AstStatement {
  initialAssignment: AstStatement;
  testExpression: AstExpression;
  updateAssignement: AstStatement;
  block: AstBlock;
  constructor(ctx:ParserRuleContext, initialAssignment: AstStatement, testExpression: AstExpression, updateAssignement: AstStatement, block:AstBlock) {
    super(ctx);
    this.initialAssignment = initialAssignment;
    this.testExpression = testExpression;
    this.updateAssignement = updateAssignement;
    this.block = block;
  }
  toString(indent=0) {
    return this.indent(indent,
`for (${this.initialAssignment.toString()} ; ${this.testExpression.toString()} ; ${this.updateAssignement.toString()} )
${this.block.toString(2)}`);
    }
}

// =============== Expression nodes

export class AstExpression extends AstNode {
  returnType() { return "unknown"};
};

export class AstErrorExpression extends AstNode {
  msg: string;
  constructor(ctx:ParserRuleContext, msg:string) {
    super(ctx);
    this.msg = msg;
    errorNodes.push(this);
  }
  returnType() { return "error" };
}

export class AstBinaryExpression extends AstExpression {
  lhs: AstNode;
  rhs: AstNode;
  op: string;
  constructor(ctx: ParserRuleContext, op:string, lhs:AstNode, rhs:AstNode) {
    super(ctx);
    this.op = op;
    this.lhs = lhs;
    this.rhs = rhs;
  }
  toString(indent:number=0) {
    return this.indent(indent, `Op(${this.lhs.toString()} ${this.op} ${this.rhs.toString()})`); 
  }
  returnType() { 
    if (["+","-","*","/"].includes(this.op)) return "int"; // TODO - should check type of LHS and RHS to see if int or float
    if (["<=","<",">=",">","==","!="].includes(this.op)) return "bool"; 
    return "unknown";
  }
}

export class AstConstExpression extends AstExpression {
  value: number;
  constructor(ctx:ParserRuleContext, value:number) {
    super(ctx);
    this.value = value;
  }
  toString() {
    return `Const(${this.value})`;
  }
  returnType() { return "int" };
}

export class AstIdentifierExpression extends AstExpression {
  declaration: AstIdentifierDeclaration;
  constructor(ctx: ParserRuleContext, declarataion: AstIdentifierDeclaration) {
    super(ctx);
    this.declaration = declarataion;
  }
  toString(indent=0) {
    return this.indent(indent, `Identifier(${this.declaration.id})`);
  }
  returnType() {
    return this.declaration.signature.returnType;
  }
}

export class AstBracketExpression extends AstExpression {
  expr: AstExpression;
  constructor(ctx: ParserRuleContext, expr:AstExpression) {
    super(ctx);
    this.expr = expr;
  }
  toString(indent=0) {
    return this.indent(indent, `Bracket(${this.expr.toString()})`);
  }
  returnType() {
    return this.expr.returnType();
  }
}

// ==================== Named declarations (on stack)

export class AstIdentifierDeclaration extends AstNode {
  id: string;
  signature:Signature;
  constructor(ctx: ParserRuleContext, id:string) {
    super(ctx);
    this.id = id;
  }
}

export class AstVariableDeclaration extends AstIdentifierDeclaration {
  constructor(ctx:ParserRuleContext, id:string, type: AllowedTypes) {
    super(ctx, id);
    this.signature = new Signature('var', type);
  }
  toString(indent:number =0) {
    return this.indent(indent, `VariableDeclaration(${this.signature.returnType}: ${this.id})`);
  }
}

export class AstFunctionDeclaration extends AstIdentifierDeclaration {
  params: AstVariableDeclaration[];
  body: AstBlock
  constructor(ctx: ParserRuleContext, returnType: AllowedTypes | 'void', id: string, params: AstVariableDeclaration[], body: AstBlock) {
    super(ctx, id);
    this.params = params;
    this.body = body;
    this.signature = new Signature('fun', returnType, params.map(param => param.signature.returnType))
  }
  toString(indent=0) {
    return this.indent(indent, 
`Function(${this.id}, ${this.params.map(param => param.toString()).join(',')})
${this.body.toString(indent+2)}
)`);
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

// statement nodes

