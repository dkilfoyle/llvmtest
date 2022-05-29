
.text

.globl main
main:
  addi sp, sp, -8                         # Make space for start of AR
  sw s0, 0(sp)                            # Save caller's FP
  sw ra, 4(sp)                            # Save caller's RA
  addi s0, sp, 8                          # New FP is at old SP
                                          # main body
  addi sp, sp, -16                        # reserve stack space for 4 locals a,b,c,d
  li a0, 10                               # Load constant 10 to a0
  sw a0, -12(s0)                          # push local var a to stack and init value
  li a0, 200                              # Load constant 200 to a0
  sw a0, -16(s0)                          # push local var b to stack and init value
  li a0, 3000                             # Load constant 3000 to a0
  sw a0, -20(s0)                          # push local var c to stack and init value
  li a0, 40000                            # Load constant 40000 to a0
  sw a0, -24(s0)                          # push local var d to stack and init value
                                          # call sum
  addi sp, sp, -8                         # make stack space for sum arguments
  lw a0, -16(s0)                          # retrieve func param b
  sw a0, 0(sp)                            # save function param 0:x to stack
  lw a0, -12(s0)                          # retrieve func param a
  sw a0, 4(sp)                            # save function param 1:y to stack
  jal sum
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack as LHSTemp3 -36
                                          # call sum
  addi sp, sp, -8                         # make stack space for sum arguments
  lw a0, -24(s0)                          # retrieve func param d
  sw a0, 0(sp)                            # save function param 0:x to stack
  lw a0, -20(s0)                          # retrieve func param c
  sw a0, 4(sp)                            # save function param 1:y to stack
  jal sum
  lw t1, -36(s0)                          # t1 = saved LHS (LHSTemp3)
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  mv a1, a0                               # Move A0 to A1 to be argument for print_int ecall
  li a0, 1                                # print_int ecall
  ecall
  addi sp, s0, -8                         # pop all main body locals off stack by setting SP to FP (SP at block start)
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
                                          # no locals to reserve stack for
  lw a0, 0(s0)                            # retrieve func param x
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result) onto stack as LHSTemp6 -12
  lw a0, 4(s0)                            # retrieve local variable y
  lw t1, -12(s0)                          # t1 = saved LHS (LHSTemp6)
  add a0, t1, a0                          # a0 = t1 (lhs) + a0 (rhs)
  addi sp, sp, 4                          # pop lhs off stack
  addi sp, s0, -8                         # pop all sum body locals off stack by setting SP to FP (SP at block start)
                                          # sum epilogue
  lw ra, -4(s0)                           # load saved RA
  mv t0, s0                               # temp current FP (also = old SP)
  lw s0, -8(s0)                           # restore callers FP
  mv sp, t0                               # restore caller's SP, deleting the callee AR
  jr ra                                   # jump back to caller (RA)

.data
