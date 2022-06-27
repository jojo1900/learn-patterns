// 一种单例模式：类实现

export default class Counter {
  count;
  static instance;

  constructor() {
    if (!Counter.instance) {
      this.count = 0;
      Counter.instance = this;
    }
    return Counter.instance;
  }
  increment() {
    this.count += 1;
    return this.count;
  }
  decrement() {
    this.count -= 1;
    return this.count;
  }
  getCount() {
    return this.count;
  }
}
