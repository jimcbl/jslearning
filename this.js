// Global context
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"

// Function context
function f1() {
  return this;
}

// In a browser:
f1() === window; // true

// In Node:
f1() === global; // true

function f2() {
  "use strict"; // see strict mode
  return this;
}

f2() === undefined; // true

////
////
var obj = { a: "Custom" };

var a = "Global";

function whatsThis() {
  return this.a; // The value of this is dependent on how the function is called
}

whatsThis(); // 'Global'
whatsThis.call(obj); // 'Custom'
whatsThis.apply(obj); // 'Custom'

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

add.call(o, 5, 7); // 16
add.apply(o, [10, 20]); // 34

// bind
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var h = g.bind({ a: "yoo" }); // bind only works once!
console.log(h()); // azerty

var o = {
  a: 37,
  f: f,
  g: g,
  h: h
};
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty

// arrow function
