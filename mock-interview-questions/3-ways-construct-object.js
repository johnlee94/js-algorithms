// List and describe 3 different ways of creating an object in JS

// my attempt:

// 1.

var myObj = {
  color: "red",
  power: 55
}

var myObj2 = new Object();
myObj2["color"] = "red";
myObj2["power"] = 55;

function createObj3(color, power) {
  color = this.color;
  power = this.power;
}

var myObj3 = createObj3("red", 55);

// Course

// 1. Object Literal Syntax

// 2. new Keyword & Object Constructor

// 3. Constructor Function

// object literal syntax
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }
};


// new keyword & Object constructor
const student = new Object();

student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];
student.getClasses = function() {
  return this.classes;
};


// constructor function
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function() {
  return this.color;
};

const carlysCar = new Car('blue', 'ferarri', 2015);
const jimsCar = new Car('red', 'tesla', 2014);

console.log(carlysCar.getColor());
console.log(jimsCar.getColor());
