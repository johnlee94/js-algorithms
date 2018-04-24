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
