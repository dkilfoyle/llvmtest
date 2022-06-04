grammar SimpleASM;

program: lines EOF;

lines: line*;
line: data | directive | instruction | label;

directive: section | global | align;
section: 'section'? ('.text' | '.data' | '.rodata' | '.bss');
global: ('.global' | '.globl') ID;
align: '.align' immediate;

data:
	name = label type = ('.string' | '.ascii' | '.asciiz') String
	| name = label type = '.byte' numlist
	| name = label type = '.word' numlist;

label: ID ':';

instruction:
	pseudo
	| environment
	| rtype
	| itype
	| stype
	| utype
	| jtype
	| btype;

pseudo:
	op = 'la' rd = register ',' id = ID
	| op = 'li' rd = register ',' immediate
	| op = 'mv' rd = register ',' rs = register
	| op = 'not' rd = register ',' rs = register
	// set if 0 
	| op = 'seqz' rd = register ',' rs = register
	| op = 'sltz' rd = register ',' rs = register
	| op = 'sgtz' rd = register ',' rs = register
	// branch if zero
	| op = 'beqz' rd = register ',' offset
	| op = 'bnez' rd = register ',' offset
	| op = 'blez' rd = register ',' offset
	| op = 'bgez' rd = register ',' offset
	| op = 'bltz' rd = register ',' offset
	| op = 'bgtz' rd = register ',' offset
	// branch if compare
	| op = 'bgt' rs = register ',' rt = register ',' offset
	| op = 'ble' rs = register ',' rt = register ',' offset
	| op = 'bgtu' rs = register ',' rt = register ',' offset
	| op = 'bltu' rs = register ',' rt = register ',' offset
	// jumps 
	| op = 'j' offset
	| op = 'jal' offset
	| op = 'jr' rs = register
	| op = 'jalr' rs = register
	| op = 'ret'
	| op = 'call' offset;

environment: 'ecall';

rtype:
	op = 'add' rd = register ',' rs1 = register ',' rs2 = register
	| op = 'sub' rd = register ',' rs1 = register ',' rs2 = register
	| op = 'xor' rd = register ',' rs1 = register ',' rs2 = register
	| op = 'or' rd = register ',' rs1 = register ',' rs2 = register
	| op = 'and' rd = register ',' rs1 = register ',' rs2 = register
	| op = 'sll' rd = register ',' rs1 = register ',' rs2 = register
	| op = 'srl' rd = register ',' rs1 = register ',' rs2 = register
	| op = 'sra' rd = register ',' rs1 = register ',' rs2 = register
	| op = 'slt' rd = register ',' rs1 = register ',' rs2 = register
	| op = 'su' rd = register ',' rs1 = register ',' rs2 = register;

itype:
	op = 'addi' rd = register ',' rs = register ',' immediate
	| op = 'xori' rd = register ',' rs = register ',' immediate
	| op = 'andi' rd = register ',' rs = register ',' immediate
	| op = 'ori' rd = register ',' rs = register ',' immediate
	| op = 'slli' rd = register ',' rs = register ',' immediate
	| op = 'srli' rd = register ',' rs = register ',' immediate
	| op = 'srai' rd = register ',' rs = register ',' immediate
	| op = 'slti' rd = register ',' rs = register ',' immediate
	| op = 'sltiu' rd = register ',' rs = register ',' immediate
	| op = 'lb' rd = register ',' rs = register ',' immediate
	| op = 'lw' rd = register ',' immediate '(' rs = register ')'
	| op = 'sltiu' rd = register ',' rs = register ',' immediate;

stype:
	op = 'sb' rs1 = register ',' immediate '(' rs2 = register ')'
	| op = 'sw' rs1 = register ',' immediate '(' rs2 = register ')';

btype:
	op = 'beq' rs1 = register ',' rs2 = register ',' immediate
	| op = 'bne' rs1 = register ',' rs2 = register ',' immediate
	| op = 'blt' rs1 = register ',' rs2 = register ',' immediate
	| op = 'bge' rs1 = register ',' rs2 = register ',' immediate
	| op = 'bltu' rs1 = register ',' rs2 = register ',' immediate
	| op = 'bgeu' rs1 = register ',' rs2 = register ',' immediate;

jtype:
	op = 'jalr' rd = register ',' immediate '(' rs1 = register ')'
	| op = 'jal' rd = register ',' offset;

utype:
	op = 'lui' rd = register ',' immediate
	| op = 'auipc' rd = register ',' immediate;

offset: immediate | ID;
register: ('zero' | 'ra' | 'sp' | 'gp' | 'tp' | 'fp') | REG;
immediate: INT | HEX | BIN | ID;
numlist: immediate (',' immediate)*;

// numbers
REG: [xXaAsStT][0-9]+;
INT: [+-]? [0-9]+;
HEX: '0' [xX][0-9a-fA-F]+;
BIN: '0' [bB][01]+;
ID: [a-zA-Z_$][a-zA-Z0-9_$]*;
String:
	["] (~["\r\n\\] | '\\' ~[\r\n])* ["]
	| ['] ( ~['\r\n\\] | '\\' ~[\r\n])* ['];
Comment: ( '#' ~[\r\n]*) -> skip;
Space: [ \t\r\n\u000C] -> skip;
