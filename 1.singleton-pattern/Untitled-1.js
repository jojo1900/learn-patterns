class C {
  static instance = null;
  constructor() {
    C.instance = this;
  }
}

const c = new C();

console.log(c);
