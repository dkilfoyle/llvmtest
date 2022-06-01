import llvm from 'llvm-bindings';
import { ANTLRInputStream, CommonTokenStream, Lexer, Parser, ParserRuleContext } from 'antlr4ts';
import { SimpleCLexer } from "./antlr/SimpleCLexer";
import { SimpleCParser } from './antlr/SimpleCParser';
import { AstBuilder } from './ast/builder';
import { errorNodes } from "./ast/nodes";
import { IRGenerator } from './compilers/llvm/IRGenerator';
import { ASMGenerator } from './compilers/riscv/ASMGenerator';

function main(): void {
  const fs = require("fs");
  const buffer = fs.readFileSync("src/test.tc");
  // Create the lexer and parser
  let inputStream = new ANTLRInputStream(buffer.toString());
  let lexer = new SimpleCLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new SimpleCParser(tokenStream);
  let tree = parser.parse();
  const astBuilder = new AstBuilder()
  const ast = astBuilder.visit(tree);
  console.log("AST print:");
  console.log(ast.toString());
  console.log("AST errors:\n", errorNodes);
  console.log("AST execute:");
  console.log(ast.execute());

  // const ir = new IRGenerator();
  // console.log(ir.codegen(ast));

  const compiler = new ASMGenerator();
  const asm = compiler.codegen(ast);
  fs.writeFileSync("test.S", asm);

}

main();