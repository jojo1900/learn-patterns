import Counter from './Counter.js';
import { Counter2 } from './Counter2.js';
const my_counter1 = new Counter();
const my_counter2 = new Counter();
const my_counter3 = new Counter();
const my_counter4 = new Counter();

my_counter1.increment();
my_counter2.increment();
my_counter3.increment();

console.log(my_counter4.getCount());

const c2_1 = Counter2;
const c2_2 = Counter2;
const c2_3 = Counter2;
const c2_4 = Counter2;

c2_1.increment();
c2_2.increment();
c2_3.increment();

console.log(c2_4.getCount());

console.log(c2_3.getThis());
console.log(c2_3.getArrowThis());
