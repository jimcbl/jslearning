var answer = 10;
answer = "hello world";

x = "The answer is " + 10; // "The answer is 42"
y = 10 + " is the answer"; // "42 is the answer"

"37" - 7; // 30
"37" + 7; // "377"

parseInt("1010", 2); // 10
parseInt("1010"); // 1010

"1.1" + "1.1"; // '1.11.1'
+"1.1" + +"1.1"; // 2.2

//// Literals

// Array
var coffees = ["French Roast", "Colombian", "Kona"];
var coffees = ["French Roast", , "Kona"];
var myList = ["home", , "school", ,]; // ["home", empty, "school", empty]

// Boolean
var check = true || false;

// Numeric
// 0, 117, -345, 123456789123456789n             (decimal, base 10)
// 015, 0001, -0o77, 0o777777777777n             (octal, base 8)
// 0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn  (hexadecimal, "hex" or base 16)
// 0b11, 0b0011, -0b11, 0b11101001010101010101n  (binary, base 2)

// Floating-point
// [(+|-)][digits].[digits][(E|e)[(+|-)]digits]
// 3.1415926
// -.123456789
// -3.1E+12
// .1e-23

// Object
function sayHello() {
  console.log("Hello Cars!");
}

var car = {
  myCar: "Saturn",
  getCar: carTypes("Honda"),
  special: sales,
  sayHello // ES5
};

var anotherCar = {
  manyCars: {
    a: "Saab",
    b: "Jeep"
  },
  7: "Mazda"
};

// RegExp
var re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

// String
var s1 = "one line \n another line";
var s2 = `In JavaScript template strings can run
over multiple lines, but double and single
quoted strings cannot.`;

var name = "Bob";
var time = "today";
var s3 = `Hello ${name}, how are you ${time}?`;
