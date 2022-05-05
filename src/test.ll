; ModuleID = 'demo'
source_filename = "demo"

@0 = private unnamed_addr constant [8 x i8] c"x = %i\0A\00", align 1

declare i32 @printf(i8*, ...)

define i32 @main() {
entry:
  %x = alloca i32, align 4
  store i32 0, i32* %x, align 4
  br label %while.cond

while.cond:                                       ; preds = %while.body, %entry
  %0 = load i32, i32* %x, align 4
  %1 = icmp slt i32 %0, 5
  br i1 %1, label %while.body, label %while.end

while.body:                                       ; preds = %while.cond
  %2 = load i32, i32* %x, align 4
  %printfcall = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([8 x i8], [8 x i8]* @0, i32 0, i32 0), i32 %2)
  %3 = load i32, i32* %x, align 4
  %4 = add i32 %3, 1
  store i32 %4, i32* %x, align 4
  br label %while.cond

while.end:                                        ; preds = %while.cond
  ret i32 0
}