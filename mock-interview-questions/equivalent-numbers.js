console.log(900.9 === 300.3 * 3);

// ????
console.log(300.3 * 3) //=> 900.9000000000001

// In Js, because of the way numbers are binary encoded, some decimal numbers
// cannot be expressed perfectly accurately
// (the way binary floating point numbers are calculated in memory)

// fixes!

// toFixed() -> argument based off how many places after the decimal
// we need to wrap in Number function because toFixed() returns to us a string
(300.3 * 3).toFixed(2); // => '900.90'
Number((300.3 * 3).toFixed(2)); // => 900.9

// toPrecision() -> argument based off how many total number of digits (including before decimal)
(300.3 * 3).toPrecision(12); // => '900.900000000'
Number((300.3 * 3).toPrecision(12)); // => 900.9

// another way is to operate after turning the decimal into an integer then converting it back
// convert 300.3 to 3003 to operate on an integer, then convert it back into the proper decimal
((300.3 * 10) * 3 ) / 10;
