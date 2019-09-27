let sayHello = function(name) {
  console.log("Xin chào! Tên tôi là " + name);
};

export { sayHello };

var awesome = 42;

var bar = [1, 2, 3];
export { bar, awesome };

////
//// another way
////

function foo() {
  // ..
}

var awesome = 42;
var bar = [1, 2, 3];

export { foo, awesome, bar };

import { bar, foo as theFooFunc } from "foo";

theFooFunc();
