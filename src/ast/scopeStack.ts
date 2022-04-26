export interface Scope<T> {
  name: string;
  entries: { [id: string]: T };
}

export class ScopeStack<T> {
  scopes: Scope<T>[];
  constructor() {
    this.scopes = [];
    this.reset();
  }
  reset() {
    this.scopes.length = 0;
    this.enterScope("topLevel");
  }
  enterScope(name: string = "noname") {
    this.scopes.push({ name, entries: {} });
  }
  currentStack() {
    return this.scopes.slice().reverse();
  }
  disposeScope() {
    return this.scopes.pop();
  }
  top() {
    return this.scopes[this.scopes.length - 1];
  }
  toString() {
    const topScope = this.top();
    return `Scope(${topScope.name}: ${Object.keys(this.top().entries)})`;
  }
  setSymbol(name: string, value: T) {
    let [found, stackVar] = this.getSymbol(name);
    if (found)
      stackVar = value;
    else
      this.top().entries[name] = value;
  }
  hasSymbol(name: string) {
    return this.scopes.some(scope => scope.entries.hasOwnProperty(name));
  }
  getSymbol(name: string): [boolean, T | {}] {
    // enumerate backwards
    const found = this.currentStack().find(scope => {
      if (scope.entries.hasOwnProperty(name)) return true;
    });
    return found ? [true, found.entries[name]] : [false, {}];
  }
  newSymbol(name: string, value: T) {
    // shouldnt already be delcared in current scope
    if (this.top().entries.hasOwnProperty(name)) throw new Error(`${name} already exists in current scope`);
    this.top().entries[name] = value;
  }
}