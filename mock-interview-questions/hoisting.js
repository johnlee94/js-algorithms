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

// functions
console.log(getProduct(2, 3));

var getProduct = function(num1, num2) {
  
}
