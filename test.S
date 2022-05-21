
.data

.text

.globl main
main:
  addi sp, sp, -8                         # Make space for start of AR
  sw s0, 0(sp)                            # Save caller's FP
  sw ra, 4(sp)                            # Save caller's RA
  addi s0, sp, 8                          # New FP is at old SP
                                          # main body
                                          # call sum
  addi sp, sp, -8                         # make stack space for sum arguments
  li a0, 3                                # Load constant 3 to a0
  sw a0, 0(sp)                            # save function param 0:a to stack
  li a0, 4                                # Load constant 4 to a0
  sw a0, 4(sp)                            # save function param 1:b to stack
  jal sum
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
  li a0, 6                                # Load constant 6 to a0
  addi sp, sp, -4
  sw a0, 0(sp)                            # push local var x to stack and init value
  li a0, 7                                # Load constant 7 to a0
  addi sp, sp, -4
  sw a0, 0(sp)                            # push local var y to stack and init value
  lw a0, 0(s0)                            # retrieve param variable a
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  lw a0, 4(s0)                            # retrieve param variable b
  lw t1, 0(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  lw a0, -12(s0)                          # retrieve local variable x
  lw t1, 0(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  lw a0, -16(s0)                          # retrieve local variable y
  lw t1, 0(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
                                          # sum epilogue
  lw ra, -4(s0)                           # load saved RA
  mv t0, s0                               # temp current FP (also = old SP)
  lw s0, -8(s0)                           # restore callers FP
  mv sp, t0                               # restore caller's SP, deleting the callee AR
  jr ra                                   # jump back to caller (RA)
