import { ParserRuleContext } from "antlr4ts";

export class AstNode {
  Location: [number, number, number, number];
  constructor(ctx?: ParserRuleContext) {
    if (ctx)
      this.Location = [ctx.start.line, ctx.start.charPositionInLine, ctx.stop.line, ctx.stop.charPositionInLine];
    else
      this.Location = [0,0,0,0];
  }
  indent(n:number, s:string, nl:boolean=false) {
    return ' '.repeat(n) + s + (nl ? "\n" : "");
  }
  toString(indent:number=0) {
    return this.indent(indent, "AstNode(unimpl)");
  }
}

export class AstNullNode extends AstNode {
  constructor() {
    super();
  }
  toString(indent:number=0) {
    return "AstNullNode(null)"
  }
}

export class AstErrorNode extends AstNode {
  errorMsg:string;
  constructor(ctx:ParserRuleContext, msg:string) {
    super(ctx);
    this.errorMsg = msg;
  }
  toString() {
    return `Error(${this.errorMsg})`
  }
}

export class AstNewNode extends AstNode {
  constructor(ctx: ParserRuleContext) {
    super(ctx);
  }
  toString() {
    return ``;
  }
}

export class AstRootNode extends AstNode {
  Children: AstNode[] = [];
  constructor(ctx:ParserRuleContext, children: AstNode[]) {
    super(ctx);
    this.Children = children;
  }
  toString() {
    let res = 'AstRoot:\n';
    this.Children.forEach(child => res += (child.toString(2) + "\n"))
    return res;
  }
}

export class AstVariableDeclaration extends AstNode {
  type:string;
  ids:string[];
  compilerGenerated:boolean;
  constructor(ctx:ParserRuleContext, type: string, ids:string[], compilerGenerated:boolean=false) {
    super(ctx);
    this.type = type;
    this.ids = ids;
    this.compilerGenerated = compilerGenerated;
  }
  toString(indent:number =0) {
    return this.indent(indent, `VariableDeclaration(${this.type}: ${this.ids.join(',')})`);
  }
}

export class AstConstExpression extends AstNode {
  value: number;
  constructor(ctx:ParserRuleContext, value:number) {
    super(ctx);
    this.value = value;
  }
  toString() {
    return `Const(${this.value})`;
  }
}

export class AstVariableDefinition extends AstNode {
  constructor(ctx: ParserRuleContext) {
    super(ctx);
  }
  toString() {
    return ``;
  }
}

export class AstAssignment extends AstNode {
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

export class AstBlock extends AstNode {
  body: AstNode[];
  returnVal: AstNode;
  scope: { [id: string]: AstVariableDeclaration }
  constructor(ctx: ParserRuleContext, scope: { [id: string]: AstVariableDeclaration }, body: AstNode[], returnVal: AstNode) {
    super(ctx);
    this.body = body;
    this.returnVal = returnVal;
    this.scope = scope;
  }
  toString(indent:number=0) {
    return this.indent(indent, 
`Block()
  Scope(${Object.keys(this.scope)})
  ${this.body.map(node => node.toString(indent+2)).join('\n')}
  Return(${this.returnVal.toString()})
)`);
  } 
}

export class AstBinaryExpression extends AstNode {
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
}

export class AstIdentifierExpression extends AstNode {
  name: string;
  constructor(ctx: ParserRuleContext, name:string) {
    super(ctx);
    this.name=name;
  }
  toString(indent=0) {
    return this.indent(indent, `Identifier(${this.name})`);
  }
}

export class AstBracketExpression extends AstNode {
  expr: AstNode;
  constructor(ctx: ParserRuleContext, expr:AstNode) {
    super(ctx);
    this.expr = expr;
  }
  toString(indent=0) {
    return this.indent(indent, `Bracket(${this.expr.toString()})`);
  }
}

export class AstFunctionDeclaration extends AstNode {
  id: string;
  params: AstVariableDeclaration[];
  body: AstBlock
  constructor(ctx: ParserRuleContext, id: string, params: AstVariableDeclaration[], body: AstBlock) {
    super(ctx);
    this.id = id;
    this.params = params;
    this.body = body;
  }
  toString(indent=0) {
    return this.indent(indent, 
`Function(${this.id}, ${this.params.map(param => param.toString()).join(',')})
${this.body.toString(indent+2)}
)`);
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