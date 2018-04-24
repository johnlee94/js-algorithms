// Describe what variable and function hoisiting is and how it works

// my attempt:

'Variable and function hoisting refers to how variables can be accessed
based on when they were created'

// for example, variables created in the general scope are global and can be accessed
// anywhere within in the file, even if it's before where the variable is being called

// however, variables declared within a function can only be accessed from within
// the same function

function whatIsGlobalVariable() {
  return globalVar;
}
// even though globalVar is declared after the whatIsGlobalVariable function
// accesses it, it can still be accessed because it is hoisted

var globalVar = 'global variable';


// course's
// In javascript, variables and functions are all hoisted to the top of the
// scope in which they are declared (whether it be global or function scope)

// the Javascript interpretor looks ahead in the code to find all of the variable
// and function declarations and then hoists those declarations to the top of the file
// but the variables are not set yet

// example:

// variables
console.log(color); // => undefined

var color = "blue";

console.log(color); // => 'blue'

// in actuality, the variable color is being hosted to the top of the file like
// 'var color;' but not set to anything until it gets to line 36

// functions
console.log(getProduct(2, 3)); // => returns error getProduct is not a function
// the function is hosted but not set yet

// function expression
var getProduct = function(num1, num2) {
  return num1 * num2;
};

// this is function declaration and is hoisted differently, the entire function
// is hoisted!
console.log(getProduct(2, 3)); // => returns 6

function getProduct(num1, num2) {
  return num1 * num2;
};

// note that variables and functions declared inside a function is only hoisted
// to the top of the function, not the top of the file (function scoping)

// ***NOTE***

// var is FUNCTION SCOPED (global and function scope)

// while const, let are BLOCK SCOPED (global, function, and block scope)
// in other words, it is only hoisted to the top of the block not to the parent
// function or the global scope

// example:
function getTotal() {

  console.log(multiplier); // => undefined
  console.log(total); // => error: total is not defined

  // total is hosted to top of getTotal function
  let total = 0;

  for (var i = 0; i < 10; i++) {
    // valueToAdd is only hoisted to the top of this for loop
    let valueToAdd = i;
    // multiplier is hoisted to the top of getTotal function
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

getTotal();

// another note: let and const are not initialized until they are declared
// and so they cannot be accessed until they are actually declared
// var, on the other hand, is initialized at the top of their scope


// summary: Variables and functions are hoisted to the top of the scope that
// they are declared in
