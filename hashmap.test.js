const { HashMap } = require('./hashmap');
const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Overwrite
test.set('lion', 'golden1');

console.log(`GET value of lion (golden2): `, test.get('lion'));
console.log(`LENGTH: (12)`, test.length());
console.log(`KEYS return all the key values (apple..., lion): `, test.keys());
console.log(
  `KEYS return all the value values (red..., golden): `,
  test.values()
);
console.log(`ENTRIES return all the entries[[],[]]: `, test.entries());
console.log(`LENGTH: (0)`, test.length());
console.log(`CAPACITY (16): `, test.getCapacity());
test.set('moon', 'silver');
test.set('lion', 'golden3');
console.log(`GET value for lion (golden3)`, test.get('lion'));
console.log(`CAPACITY (32): `, test.getCapacity());
console.log(`ENTRIES return all the entries[[],[]]: `, test.entries());

test.clear();
console.log(test.getCapacity());
