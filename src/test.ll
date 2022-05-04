; ModuleID = 'demo'
source_filename = "demo"

@0 = private unnamed_addr constant [8 x i8] c"x is 3\0A\00", align 1
@1 = private unnamed_addr constant [12 x i8] c"x is not 3\0A\00", align 1

declare i32 @printf(i8*, ...)

define i32 @main() {
entry:
  %x = alloca i32, align 4
  store i32 3, i32* %x, align 4
  %0 = load i32, i32* %x, align 4
  %1 = icmp eq i32 %0, 4
  br i1 %1, label %then, label %else

then:                                             ; preds = %entry
  %printfcall = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([8 x i8], [8 x i8]* @0, i32 0, i32 0))
  br label %endif

else:                                             ; preds = %entry
  %printfcall1 = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([12 x i8], [12 x i8]* @1, i32 0, i32 0))
  br label %endif

endif:                                            ; preds = %else, %then
  ret i32 0
}