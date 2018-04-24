// What is the 'this' keyword and how is it used?

// my attempt:

'The this keyword is a property of the Object prototype in Javascript.
It is used to ascribe properties or methods of the Object class when it is
instantiated'

// example:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var John = new Person('John', 23);


// course's
// the 'this' keyword is used to refer to the object that it is inside of

// if you console.log(this) in the console, it returns the global Window object
// because it isn't located in another object

var house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPricePerSquareFoot: function() {
    // same as return house.price / house.squareFeet;
    return this.price / this.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot);
