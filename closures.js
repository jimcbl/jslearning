// closures
function sayHello() {
  var message = "Hello"; // define a local variable.
  return function() {
    // return a function from sayHello.
    console.log(message); // wanna know if 'message' still in scope?
  };
}

var helloSayer = sayHello();
helloSayer(); // call the inner function returned from sayHello.

function pow(x) {
  return function(y) {
    return y ** x;
  };
}

let squarepow = pow(2); // function x**2

// Arguments object
function myConcat(separator) {
  let result = "";
  for (let i = 1; i < arguments.length; i++) {
    if (i === arguments.length - 1) {
      result += arguments[i];
    } else {
      result += arguments[i] + separator;
    }
  }
  return result;
}

myConcat("; ", "red", "orange", "blue"); // returns "red; orange; blue"
