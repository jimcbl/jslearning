export function foo() {
  // ..
}

export var awesome = 42;

var bar = [1, 2, 3];
export { bar };

////
//// another way
////

function foo() {
  // ..
}

var awesome = 42;
var bar = [1, 2, 3];

export { foo, awesome, bar };
