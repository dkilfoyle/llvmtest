# IR to binary

```bash
llc -filetype=obj test.ll -o test.o
clang test.o -o test
./test
```

# IR to assembly

```bash
llc -filetype=asm test.ll -o test.s
```

# .c to IR

```bash
clang test.c -S -emit-llvm -o test.ll
```