// what is an IIFE and why are they used?
// code out an example of an IIFE

IIFE is an Immediately Invoked Function Expression,
or a function that is executed right after it is created

(function()) => They are enclosed in Parantheses.
 "Grouping Operator ()" or Lexical Scope

Notes: Variables stored within IIFE's cannot be accessed from outside
-> Assigning an IIFE to a variable does not store it but its result

// i.e.
(function Alert() {
  alert("Hi There!");
})();


// course's

(function doubleNumber(num) {
  return num * 2;
})(10)

// the main purpose of using IIFE's is to preserve variables (not ovewrite global variables)
// i.e. if using jQuery, var $ = '...' can never be used or it will overwrite

// a neat trick is to wrap an entire javascript file into an iffe to give it
// its own private scope!
(function() {

 // CODE //
 // FUNCTIONS //
 // VARIABLES //
 // OPERATIONS //
 var $ = 'currency';

})();
