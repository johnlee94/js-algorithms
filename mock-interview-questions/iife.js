// what is an IIFE and why are they used?
// code out an example of an IIFE

IIFE is an Immediately Invoked Function Expression

(function()) => They are enclosed in Parantheses.
 "Grouping Operator ()" or Lexical Scope

Notes: Variables stored within IIFE's cannot be accessed from outside
-> Assigning an IIFE to a variable does not store it but its result

// i.e.
(function Alert() {
  alert("Hi There!");
})
