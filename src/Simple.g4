grammar Simple;

parse: repl EOF;

repl: functionDecl* block;

block: statement* ('return' expression ';')?;

statement:
	variableDeclaration
	| assignment
	| functionCall
	| ifStatement
	| forStatement
	| whileStatement;

variableDeclaration: varType Identifier (',' Identifier)* ';';

varType: 'int' | 'string';
funType: varType | 'void';

assignment: Identifier indexes? '=' expression ';';

functionCall: Identifier '(' exprList? ')' ';';

ifStatement: ifStat elseIfStat* elseStat?;

ifStat: 'if' expression '{' block '}';

elseIfStat: 'else' 'if' expression '{' block '}';

elseStat: 'else' '{' block '}';

functionDecl:
	funType Identifier '(' paramList? ')' '{' block '}';
param: varType Identifier;
paramList: param (',' param)*;

forStatement:
	'for' Identifier '=' expression 'to' expression 'do' block 'end';

whileStatement: 'while' expression 'do' block 'end';

idList: Identifier ( ',' Identifier)*;

exprList: expression ( ',' expression)*;

expression:
	op = '-' expression										# unaryMinusExpression
	| op = '!' expression									# notExpression
	| <assoc = right> expression op = '^' expression		# powerExpression
	| expression op = ('*' | '/' | '%') expression			# multExpression
	| expression op = ('+' | '-') expression				# addExpression
	| expression op = ('>=' | '<=' | '>' | '<') expression	# compExpression
	| expression op = ('==' | '!=') expression				# eqExpression
	| expression op = '&&' expression						# andExpression
	| expression op = '||' expression						# orExpression
	| expression op = '?' expression ':' expression			# ternaryExpression
	| expression op = 'in' expression						# inExpression
	| Number												# numberExpression
	| Bool													# boolExpression
	| 'null'												# nullExpression
	| functionCall indexes?									# functionCallExpression
	| list indexes?											# listExpression
	| Identifier indexes?									# identifierExpression
	| String indexes?										# stringExpression
	| '(' expression ')' indexes?							# bracketExpression
	| 'input' '(' String? ')'								# inputExpression;

list: '[' exprList? ']';

indexes: ( '[' expression ']')+;

Bool: 'true' | 'false';

Number: Int ( '.' Digit*)?;

Identifier: [a-zA-Z_] [a-zA-Z_0-9]*;

String:
	["] (~["\r\n\\] | '\\' ~[\r\n])* ["]
	| ['] ( ~['\r\n\\] | '\\' ~[\r\n])* ['];
Comment: ( '//' ~[\r\n]* | '/*' .*? '*/') -> skip;
Space: [ \t\r\n\u000C] -> skip;
fragment Int: [1-9] Digit* | '0';

fragment Digit: [0-9];