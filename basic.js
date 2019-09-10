var Việt = 10;
var việt = 5;
Việt + việt; // 15

// a one line comment

/* this is a longer,
 * multi-line comment
 */

{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // 1
console.log(b); // ReferenceError
console.log(c); // ReferenceError

myVar = 3;
console.log(myVar); // 3

console.log(myNewVar); // undefined
var myNewVar = 4;

//same as
var myNewVar;
console.log(myNewVar); // undefined
myNewVar = 4;

////

(function() {
  console.log(myNewVar); // undefined
  var myNewVar = "local value";
})();

// same as
(function() {
  var myNewVar;
  console.log(myNewVar); // undefined
  myNewVar = "local value";
})();

/* Function declaration */

foo(); // "bar"
function foo() {
  console.log("bar");
}

/* Function expression */

baz(); // TypeError: baz is not a function
var baz = function() {
  console.log("bar2");
};

////

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
delete MY_OBJECT.key;

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");

console.log(MY_OBJECT); // {}
console.log(MY_ARRAY); // ['HTML','CSS','JAVASCRIPT'];
