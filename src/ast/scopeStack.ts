import { AstIdentifierDeclaration } from "./nodes";


export interface Scope {
  name: string;
  entries: {[id: string]: AstIdentifierDeclaration};
}

export class ScopeStack {
  scopes: Scope[];
  constructor() {
    this.scopes = [];
    this.enterScope("topLevel");
  }
  enterScope(name:string="noname") {
    this.scopes.push({name, entries: {}});
  }
  currentStack() {
    return this.scopes.slice().reverse();
  }
  disposeScope() {
    return this.scopes.pop();
  }
  top() {
    return this.scopes[this.scopes.length-1];
  }
  toString() {
    const topScope = this.top();
    return `Scope(${topScope.name}: ${Object.keys(this.top().entries)})`;
  }
  setSymbol(name:string, value:AstIdentifierDeclaration) {
    let [found, stackVar] = this.getSymbol(name);
    if (found)
      stackVar = value;
    else
      this.scopes[this.scopes.length-1].entries[name] = value;
  }
  hasSymbol(name: string) {
    return this.scopes.some(scope => scope.entries.hasOwnProperty(name));
  }
  getSymbol(name:string): [boolean, AstIdentifierDeclaration | {}] {
    // enumerate backwards
    const found = this.currentStack().find(scope => {
      if (scope.entries.hasOwnProperty(name)) return true;
    });
    return found ? [true, found.entries[name]] : [false, {}];
  }
}