import llvm from 'llvm-bindings';
import { ANTLRInputStream, CommonTokenStream, Lexer, Parser, ParserRuleContext } from 'antlr4ts';
import { SimpleLexer } from "./antlr/SimpleLexer";
import { SimpleParser } from './antlr/SimpleParser';
import { AstBuilder } from './ast/builder';

class SimpleLexer2 extends SimpleLexer {
  FeatureControlFlow:boolean;
  FeatureMutableVars:boolean;
  FeatureUserOperators:boolean;
  constructor(inputStream:ANTLRInputStream) {
    super(inputStream);
    this.FeatureControlFlow = false;
    this.FeatureMutableVars = false;
    this.FeatureUserOperators = false;
  }
}

function main(): void {
  // Create the lexer and parser
  let inputStream = new ANTLRInputStream("def foo(int x, int y) return x+y; end\nint z; z=5;");
  let lexer = new SimpleLexer2(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new SimpleParser(tokenStream);
  let tree = parser.parse();
  const astBuilder = new AstBuilder()
  const ast = astBuilder.visit(tree);
  console.log(ast.toString());
}

main();