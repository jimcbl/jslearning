// Default parameters
function multiply(a = 3, b) {
  return a * b;
}
multiply(5); // NaN

function multiply(a, b = 2) {
  return a * b;
}
multiply(5); // 10

// Rest parameters
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

// The arguments.callee property contains
// the currently executing function.
[1, 2, 3, 4, 5].map(function(n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
