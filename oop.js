function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert("Hi! I'm " + this.name + ".");
  };
}

const person1 = new Person("Bob");
person1.name;
person1.greeting();

// Before ES5 version
function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

  this.bio = function() {
    alert(`${this.name.first} ${this.name.last} is ${this.age} years old.
              ${this.gender === "male" ? "He" : "She"} likes ${
      this.interests[0]
    } and ${this.interests[1]}.`);
  };
  this.greeting = function() {
    alert("Hi! I'm " + this.name.first + ".");
  };
}

const person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);

///
///  Inheritance
///

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animal();

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

////

let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

//NB: For similar methods, the child's method takes precedence over parent's method

// Class version

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first: first,
      last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  get bio() {
    return this.greeting();
  }

  static getSubject(obj) {
    return obj.gender === "male" ? "He" : "She";
  }

  greeting() {
    return "Hi! I'm " + this.name.first + ".";
  }
}

const newPerson1 = new Person("Roger", "Federer", 37, "male", ["tennis"]);
newPerson1.getSubject; //  undefined

Person.getSubject(newPerson1); // He

////
// Sub classing with extends
////

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

///
///  Encapsulation
///

function Person(_name) {
  var name = _name;
  this.setName = function(_name) {
    name = _name;
  };
  this.getName = function() {
    return name;
  };
}

var person = new Person("John Park");
console.log(person.name); // => undefined
console.log(person.getName()); // => John Park

person.setName("ZA");
console.log(person.getName()); // => ZA
