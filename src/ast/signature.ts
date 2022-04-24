export type AllowedTypes = 'int' | 'string' | 'void' | 'bool';
export type AllowedSignatures = 'var' | 'fun';

export class Signature {
  baseType: AllowedSignatures;
  returnType: AllowedTypes;
  params: AllowedTypes[];
  constructor(baseType: AllowedSignatures, returnType: AllowedTypes, params: AllowedTypes[] = []) {
    if ((baseType == 'var') && (returnType == 'void')) throw new Error("Void is not a valid variable type")
    this.baseType = baseType;
    this.returnType = returnType;
    this.params = params;
  }
}