// Destructuring assignment
// Array

var foo = ["one", "two", "three"];

// without destructuring
var one = foo[0];
var two = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

//
// Object
//

var user = {
  id: 20,
  displayName: "jimcbl",
  fullName: {
    firstName: "Jim",
    lastName: "Tran"
  }
};

function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); // 20
console.log(whois(user)); // "jimcbl is Jim"

// Unary operators
// delete
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4; // create property h
delete x; // returns true (can delete if declared implicitly)
delete y; // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj; // returns true (can delete if declared implicitly)

// typeof
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var foo = ["Apple", "Mango", "Orange"];
var today = new Date();
typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"

// in
// Arrays
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false (you must specify the index number,
// not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
var myString = new String("coral");
"length" in myString; // returns true

// Custom objects
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true

// instanceof
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
