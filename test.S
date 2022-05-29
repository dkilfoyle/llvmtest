
.data

.text

.globl main
main:
  addi sp, sp, -8                         # Make space for start of AR
  sw s0, 0(sp)                            # Save caller's FP
  sw ra, 4(sp)                            # Save caller's RA
  addi s0, sp, 8                          # New FP is at old SP
                                          # main body
  addi sp, sp, -8                         # reserve stack space for 2 locals answer,answer2
                                          # call sum
  jal sum
  sw a0, -12(s0)                          # push local var answer to stack and init value
  lw a0, -12(s0)                          # retrieve local variable answer
  mv a1, a0                               # Move A0 to A1 to be argument for print_int ecall
  li a0, 1                                # print_int ecall
  ecall
                                          # call sum2
  jal sum2
  sw a0, -16(s0)                          # push local var answer2 to stack and init value
  lw a0, -16(s0)                          # retrieve local variable answer2
  mv a1, a0                               # Move A0 to A1 to be argument for print_int ecall
  li a0, 1                                # print_int ecall
  ecall
  li a0, 0                                # Load constant 0 to a0
  addi sp, sp, -8                         # pop all main body locals off stack
                                          # main epilogue
  lw ra, -4(s0)                           # load saved RA
  mv t0, s0                               # temp current FP (also = old SP)
  lw s0, -8(s0)                           # restore callers FP
  mv sp, t0                               # restore caller's SP, deleting the callee AR
  jr ra                                   # jump back to caller (RA)
sum:
  addi sp, sp, -8                         # Make space for start of AR
  sw s0, 0(sp)                            # Save caller's FP
  sw ra, 4(sp)                            # Save caller's RA
  addi s0, sp, 8                          # New FP is at old SP
                                          # sum body
  addi sp, sp, -8                         # reserve stack space for 2 locals i,x
  li a0, 0                                # Load constant 0 to a0
  sw a0, -12(s0)                          # push local var i to stack and init value
  li a0, 0                                # Load constant 0 to a0
  sw a0, -16(s0)                          # push local var x to stack and init value
whiletest1:
  lw a0, -12(s0)                          # retrieve local variable i
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  li a0, 10                               # Load constant 10 to a0
  lw t1, 0(sp)                            # t1 = saved LHS
  slt a0 t1 a0                            # a0 = t1 (lhs) < a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  beqz a0, exitwhile2                     # if not true exit loop
  lw a0, -16(s0)                          # retrieve local variable x
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  li a0, 1                                # Load constant 1 to a0
  lw t1, 0(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  sw a0, -16(s0)                          # save RHS to variable on stack
  lw a0, -12(s0)                          # retrieve local variable i
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  li a0, 1                                # Load constant 1 to a0
  lw t1, 0(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  sw a0, -12(s0)                          # save RHS to variable on stack
  addi sp, sp, 0                          # pop all while block locals off stack
  j whiletest1                            # loop back to test
exitwhile2:
  lw a0, -16(s0)                          # retrieve local variable x
  addi sp, sp, -8                         # pop all sum body locals off stack
                                          # sum epilogue
  lw ra, -4(s0)                           # load saved RA
  mv t0, s0                               # temp current FP (also = old SP)
  lw s0, -8(s0)                           # restore callers FP
  mv sp, t0                               # restore caller's SP, deleting the callee AR
  jr ra                                   # jump back to caller (RA)
sum2:
  addi sp, sp, -8                         # Make space for start of AR
  sw s0, 0(sp)                            # Save caller's FP
  sw ra, 4(sp)                            # Save caller's RA
  addi s0, sp, 8                          # New FP is at old SP
                                          # sum2 body
  addi sp, sp, -4                         # reserve stack space for 1 locals x
  li a0, 0                                # Load constant 0 to a0
  sw a0, -12(s0)                          # push local var x to stack and init value
  addi sp, sp, -4                         # reserve stack space for 1 locals i
  li a0, 0                                # Load constant 0 to a0
  sw a0, -16(s0)                          # push local var i to stack and init value
whiletest3:
  lw a0, -16(s0)                          # retrieve local variable i
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  li a0, 10                               # Load constant 10 to a0
  lw t1, 0(sp)                            # t1 = saved LHS
  slt a0 t1 a0                            # a0 = t1 (lhs) < a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  beqz a0, exitwhile4                     # if not true exit loop
  lw a0, -12(s0)                          # retrieve local variable x
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  li a0, 1                                # Load constant 1 to a0
  lw t1, 0(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  sw a0, -12(s0)                          # save RHS to variable on stack
  addi sp, sp, 0                          # pop all  locals off stack
  lw a0, -16(s0)                          # retrieve local variable i
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  li a0, 1                                # Load constant 1 to a0
  lw t1, 0(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  sw a0, -16(s0)                          # save RHS to variable on stack
  addi sp, sp, 0                          # pop all while block locals off stack
  j whiletest3                            # loop back to test
exitwhile4:
  addi sp, sp, -4                         # pop all  locals off stack
  lw a0, -12(s0)                          # retrieve local variable x
  addi sp, sp, -4                         # pop all sum2 body locals off stack
                                          # sum2 epilogue
  lw ra, -4(s0)                           # load saved RA
  mv t0, s0                               # temp current FP (also = old SP)
  lw s0, -8(s0)                           # restore callers FP
  mv sp, t0                               # restore caller's SP, deleting the callee AR
  jr ra                                   # jump back to caller (RA)
