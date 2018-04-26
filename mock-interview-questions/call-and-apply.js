// Describe the javascript call() and apply() methods
// 1. How do they function?
// 2. What arguments do they take?
// 3. How are they different?

// call()
// Function.prototype.call() => gives us a different way of passing arguments
// into a function; It also allows us to manipulate the 'this' context
// function.call(thisArg, arg1, arg2, ...)

const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is
      ${year}. The color is ${color}. \n`);
  }
};


const car2 = {
  brand: 'Lamborghini'
};


car1.getCarDescription(80000, 2010, 'blue');
// => This car is a Porsche. The price is $80000. The year is  2010. The color is blue.

car1.getCarDescription.call(car2, 20000, 2013, 'yellow');
// => This car is a Lamborghini. The price is $20000. The year is 2013. The color is yellow.



// apply()
// same as call but the second argument is an array of the function's arguments

const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is
      ${year}. The color is ${color}. \n`);
  }
};


const car3 = {
  brand: 'Ferrari'
};


car1.getCarDescription(80000, 2010, 'blue');
// => This car is a Porsche. The price is $80000. The year is  2010. The color is blue.

car1.getCarDescription.apply(car3, [35000, 2018, 'black']);
// => This car is a Ferrari. The price is $35000. The year is 2018. The color is black.
