function square(x) {
  return x * x;
}

let square = function squ(x) {
  return x * x;
};

let square = function(x) {
  return x * x;
};

let square = x => x * x;

var x = square(4);

// hoisting
console.log(ansquare(5));
function ansquare(n) {
  return n * n;
}

// error
console.log(squareNew); // square is hoisted with an initial value undefined.
console.log(squareNew(5)); // Uncaught TypeError: square is not a function
var squareNew = function(n) {
  return n * n;
};

function fibo(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

//
let num1 = 20,
  num2 = 3,
  name = "Chamahk";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// Nested functions

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
