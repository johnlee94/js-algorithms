// *** REGEX!! *** //

// 2 ways of calling Regexp..
var re = /ab+c/;

var re = new RegExp('ab+c');


// Getting only alphabets...
const myString = 'Hello!!';

// backtick w, searches for any character that isn't part of the latin alphabets
// second argument is what it is replaced with, in this case just an empty string
myString.replace(/[^\w]/g, "") // -> 'Hello'
