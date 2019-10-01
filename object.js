// Object.entries()
// Returns an array containing all of the [key, value] pairs
// of a given object's own enumerable string properties.
const object1 = {
  a: "somestring",
  b: 42,
  c: {
    num: 10
  }
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
// expected output:
// "a: somestring"
// "b: 42"
// "c: [object Object]"
// order is not guaranteed

////
// Object.defineProperty()
// configurable
// enumerable
// value
// writable

// Object.values()
// Returns an array of a given object's own enumerable property values,
const object1 = {
  a: "somestring",
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
