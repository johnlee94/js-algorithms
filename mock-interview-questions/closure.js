// Lexical Scoping defines how variable names are resolved in nested functions.
// Other names of Lexical Scoping are Static Scoping or Closure. It means that the
// scope of an inner function contains the scope of a parent function

// a closure is an inner function that has access to the scope of an enclosing function
// // access to 3 scopes:
// // 1. variables in its own scope
// // 2. varibales in the scope of the outer function
// // 3. variables in the global scope

// note that closures have access to its own parameters as well parameters of
// outer function(s)

// example:

const globalVariable = 'global variable';

function outterFunction(param1) {
  const variable1 = 'var 1';

  function innerFunc(param2) {
    const variable2 = 'var 2';

    console.log('globalVariable: ', globalVariable);
    console.log('variable1: ', variable1);
    console.log('variable2: ', variable2);
    console.log('param1: ', param1);
    console.log('param2: ', param2);
  }

  innerFunc('param one');
}

outterFunc('param two');
