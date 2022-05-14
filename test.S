
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
  lw ra, 4(sp)                            # load saved RA
  addi sp, sp, 8                          # pop AR off stack
  lw s0, 0(sp)                            # restore callers FP
  jr ra                                   # jump back to caller (RA)
sum_entry:
  mv s0, sp                               # set FP = top of current AR
  sw ra, 0(sp)                            # push RA to stack, completing the AR
  addi sp, sp, -4
                                          # sum body
  lw a0, 4(s0)
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack
  addi sp, sp, -4                         # new stack slot
  lw a0, 8(s0)
  lw t1, 4(sp)                            # t1 = saved LHS
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
                                          # sum epilogue
  lw ra, 4(sp)                            # load saved RA
  addi sp, sp, 16                         # pop AR off stack
  lw s0, 0(sp)                            # restore callers FP
  jr ra                                   # jump back to caller (RA)
