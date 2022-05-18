
.data

.text

.globl main
main:
main_entry:
  mv s0, sp                               # set FP = top of current AR
  sw ra, 0(sp)                            # push RA to stack, completing the AR
  addi sp, sp, -4
                                          # main body
                                          # call sum
  sw s0, 0(sp)                            # save caller FP on stack
  addi sp, sp, -4
  li a0, 3                                # Load constant 3 to a0
  sw a0, 0(sp)                            # push function param 0:a to stack
  addi sp, sp, -4
  li a0, 4                                # Load constant 4 to a0
  sw a0, 0(sp)                            # push function param 1:b to stack
  addi sp, sp, -4
  jal sum_entry
                                          # main epilogue
  addi sp, sp, 0                          # pop 0 locals off the stack
  lw ra, 4(sp)                            # load saved RA
  addi sp, sp, 8                          # pop AR off stack
  lw s0, 0(sp)                            # restore callers FP
  jr ra                                   # jump back to caller (RA)
sum_entry:
  mv s0, sp                               # set FP = top of current AR
  sw ra, 0(sp)                            # push RA to stack, completing the AR
  addi sp, sp, -4
                                          # sum body
  li a0, 6                                # Load constant 6 to a0
  sw a0, 0(sp)                            # push local var x to stack and init value
  addi sp, sp, -4
  li a0, 7                                # Load constant 7 to a0
  sw a0, 0(sp)                            # push local var y to stack and init value
  addi sp, sp, -4
  lw a0, 4(s0)                            # retrieve param variable a
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  addi sp, sp, -4                         # new stack slot
  lw a0, 8(s0)                            # retrieve param variable b
  lw t1, 4(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  addi sp, sp, -4                         # new stack slot
  lw a0, -4(s0)                           # retrieve local variable x
  lw t1, 4(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  addi sp, sp, -4                         # new stack slot
  lw a0, -8(s0)                           # retrieve local variable y
  lw t1, 4(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
                                          # sum epilogue
  addi sp, sp, 8                          # pop 2 locals off the stack
  lw ra, 4(sp)                            # load saved RA
  addi sp, sp, 16                         # pop AR off stack
  lw s0, 0(sp)                            # restore callers FP
  jr ra                                   # jump back to caller (RA)
