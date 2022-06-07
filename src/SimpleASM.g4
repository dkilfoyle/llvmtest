grammar SimpleASM;

program: lines EOF;

lines: line*;
line: data | directive | instruction | label;

directive: section | global | align;
section: 'section'? ('.text' | '.data' | '.rodata' | '.bss');
global: ('.global' | '.globl') ID;
align: '.align' immediate;

data:
	name = ID ':' type = ('.string' | '.ascii' | '.asciiz') String
	| name = ID ':' type = '.byte' numlist
	| name = ID ':' type = '.word' numlist;

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
	| op = ('seqz' | 'sltz' | 'sgtz') rd = register ',' rs1 = register
	// branch if zero
	| op = ('beqz' | 'bnez' | 'blez' | 'bgez' | 'bltz' | 'bgtz') rs1 = register ',' offset
	// branch if compare
	| op = ('bgt' | 'ble' | 'bgtu' | 'bltu') rs1 = register ',' rs2 = register ',' offset
	// jumps 
	| op = 'j' offset
	| op = 'jal' offset
	| op = 'jr' rs = register
	| op = 'jalr' rs = register
	| op = 'ret'
	| op = 'call' offset;

environment: 'ecall';

rtype:
	op = (
		'add'
		| 'sub'
		| 'xor'
		| 'or'
		| 'and'
		| 'sll'
		| 'srl'
		| 'sra'
		| 'slt'
		| 'su'
	) rd = register ',' rs1 = register ',' rs2 = register;

itype:
	op = (
		'addi'
		| 'xori'
		| 'andi'
		| 'ori'
		| 'slli'
		| 'srli'
		| 'srai'
		| 'slti'
		| 'sltiu'
	) rd = register ',' rs1 = register ',' immediate
	| op = ('lb' | 'lh' | 'lw') rd = register ',' immediate '(' rs1 = register ')';

stype:
	op = ('sb' | 'sh' | 'sw') rs2 = register ',' immediate '(' rs1 = register ')';

btype:
	op = ('beq' | 'bne' | 'blt' | 'bge' | 'bltu' | 'bgeu') rs1 = register ',' rs2 = register ','
		immediate;

jtype:
	op = 'jalr' rd = register ',' immediate '(' rs1 = register ')'
	| op = 'jal' rd = register ',' offset;

utype:
	op = 'lui' rd = register ',' immediate
	| op = 'auipc' rd = register ',' immediate;

offset: immediate | ID;
register: ('zero' | 'ra' | 'sp' | 'gp' | 'tp' | 'fp') | REG;
immediate: INT | HEX | BIN;
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
