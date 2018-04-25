// what will be logged to the console?

var num = 50;

function logNumber() {
    console.log(num);
    var num = 100;
}

logNumber();

// my answer: 50 because num is already defined at the top. You cannot
// create another variable with the same name

// course
// RETURNS undefined!!

// this is because the num variable is being hoisted to the top of the logNumber
// function scope but not set yet

// such as:
// 'under the hood'
var num = 50;

function logNumber() {
    var num;

    console.log(num);

    num = 100;
}

logNumber();


// extra
var num = 50;

function logNumber() {
    console.log(num);
}

logNumber(); // returns 50 because there is no num variable in current function
// scope and so the javascript interpretor looks at num variable in parent scope
