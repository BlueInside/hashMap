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

console.log(`GET value of lion (golden): `, test.get('lion'));
console.log(`KEYS return all the key values (apple..., lion): `, test.keys());
console.log(
  `KEYS return all the value values (red..., golden): `,
  test.values()
);
console.log(`ENTRIES return all the entries[[],[]]: `, test.entries());

console.log(`LENGTH of stored keys (12):  `, test.length());
console.log(`HAS key of hat (True):  `, test.has('hat'));
console.log(`HAS key of star (False):  `, test.has('star'));
console.log(`REMOVE key of hat (TRUE):  `, test.remove('hat'));
console.log(`LENGTH of stored keys (11):  `, test.length());
console.log(`REMOVE key of starfish (FALSE):  `, test.remove('starfish'));
console.log(`CLEAR HASHMAP:  `, test.clear());
console.log(`LENGTH of stored keys (0):  `, test.length());
console.log(`KEYS return empty ARRAY []: `, test.keys());
