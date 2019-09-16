var a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

var a2 = a.map(function(s) {
  return s.length;
});

var a3 = a.map(s => s.length);

// No separate "this"
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

function PersonNew() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
var pNew = new PersonNew();
