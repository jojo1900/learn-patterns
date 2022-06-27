// 另一种单例模式：对象实现

export const Counter2 = {
  count: 0,
  increment: function () {
    return (this.count += 1);
  },
  decrement: function () {
    return (this.count -= 1);
  },
  getCount: function () {
    return this.count;
  },
  getThis() {
    return this;
  },
  getArrowThis: () => {
    return this;
  },
};
