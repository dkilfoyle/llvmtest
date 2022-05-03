@0 = private unnamed_addr constant [16 x i8] c"\22Hello there\\n\22\00", align 1
@1 = private unnamed_addr constant [7 x i8] c"\22x=%i\22\00", align 1

declare i32 @printf(i8*, ...)

define i32 @main() {
entry:
  %printfcall = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([16 x i8], [16 x i8]* @0, i32 0, i32 0))
  %x = alloca i32, align 4
  store i32 3, i32* %x, align 4
  %0 = load i32, i32* %x, align 4
  %printfcall1 = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([7 x i8], [7 x i8]* @1, i32 0, i32 0), i32 %0)
  ret i32 %0
}