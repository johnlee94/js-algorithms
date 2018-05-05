var x = 10;

function y() {
  // the function x is hoisted to the top of the function scope
    // function x() {}
    // then it is reassigned to 100!
    x = 100;
    return;
    function x() {}
}

y();

console.log(x);

// if we did

var x = 10;

function y() {
    x = 100;
    return x;
    function x() {}
}

y();

console.log(y()); // returns 100
console.log(x); // still returns 10 because x globally is still 10;
