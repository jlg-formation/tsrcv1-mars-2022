"use strict";

console.log("this: ", this);

function Person() {
  console.log("this: ", this);
  this.name = "Toto";
  this.age = 34;
}

class Person2 {
  constructor() {
    console.log("this: ", this);
    this.name = "Toto";
    this.age = 34;
  }
}

const p = Object.create(Person.prototype);
Person.bind(p)();
console.log("p: ", p);

const p2 = new Person();
console.log("p2: ", p2);
