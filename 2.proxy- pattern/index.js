const person = {
  age: 1,
  name: 'll',
};

const proxyPerson = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`the value of ${prop} is ${obj[prop]}`);
    return obj[prop];
  },
  set: (obj, prop, value) => {
    if (prop === 'age') {
      if (typeof value !== 'number') {
        console.log('the type of age must be number');
        return obj.age;
      }
      obj.age = value;
    }
  },
});

console.log(proxyPerson.name);
proxyPerson.age = '12';
