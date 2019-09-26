function foo(x, y, z) {
  console.log(x, y, z);
}

foo(...[1, 2, 3]); // 1 2 3

var a = [2, 3, 4];
var b = [1, ...a, 5];

console.log(b); // [1 2 3 4 5]

function foo(x, y, ...z) {
  console.log(x, y, z);
}

foo(1, 2, 3, 4, 5); // 1 2 [3,4,5]

// no named parameters
function foo(...args) {
  console.log(args);
}

foo(1, 2, 3, 4, 5); // [1,2,3,4,5]

var x = 2,
  y = 3,
  o = {
    x: x,
    y: y
  };
