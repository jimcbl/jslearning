// Create an Array
let arr = [1, 2, 5, 3, 4];
let newArr = Array.from(arr);
let arrOf = Array.of(1, 2, 3);
let shallowArr = arr.slice();
let moreItemArr = ["a", ...arr, "z"];

// Add to the end of the Array
// "push" return the new length of the array -> 6
let arrLength = arr.push(10); // [1,2,5,3,4,10]

// Remove from the end of the Array
// "pop" return that element -> 10
let element = arr.pop();

// Remove from the front of an Array
// "shift" return that element -> 1
let first = arr.shift();

// Add to the front of an Array
// return the new length of the array
arr.unshift(1, 9); // [1,9,2,5,3,4]

// Find the index of an item in the Array
let pos = arr.indexOf(5); // 3

// Remove an item by index position
let removedItem = arr.splice(pos, 1);

// Reverses the order
arr.reverse();

// Sorts the elements of an array in place and returns the array.
arr.sort((a, b) => a - b); // ascending order

// Merge two or more arrays
// does not change the existing arrays,
// but instead returns a new array.
let arr1 = [2, 4, 6, 1];
let arr2 = [1, 3, 5];
let linkArr = arr1.concat(arr2);

// Iteration methods
// Returns a new Array Iterator object that
// contains the key/value pairs for each index in the array.
let iterators = arr1.entries();
for (let i of iterators) {
  console.log(i); // 0 2 - 1 4 - 2 6
}

// Array.prototype.every()
// Returns true if every element in this array satisfies the provided testing function.
arr2.every(x => {
  return x % 2 === 1;
});

// Array.prototype.filter()
// Creates a new array with all of the elements of this array for which
// the provided filtering function returns true.

// Array.prototype.find()
// Returns the found value in the array, if an element in the array
// satisfies the provided testing function or undefined if not found.

// Array.prototype.map()
// Creates a new array with the results of calling a provided
// function on every element in this array.
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li>{number}</li>);

// Array.prototype.reduce()
// Apply a function against an accumulator and each value of the array
// (from left-to-right) as to reduce it to a single value.

// Array.prototype.some()
// Returns true if at least one element in this array
// satisfies the provided testing function.

//// NEW

// Array.prototype.includes()
// This method determines whether an array includes a certain
// value among its entries, returning true or false as appropriate.
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

// Array.prototype.flat()
// This method creates a new array with all sub-array elements
// concatenated into it recursively up to the specified depth.
var arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array.prototype.flatMap()
// a map() followed by a flat() of depth 1
