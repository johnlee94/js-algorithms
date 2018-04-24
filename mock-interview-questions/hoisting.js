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
