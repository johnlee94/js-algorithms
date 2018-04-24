// What is the difference between the comparison operators == and ===?

// my answer:
'the == or loose equality comparison operator checks to see if the values are the same
whereas the === or strict equality checks to see if both the values and data type
are the same'

// for example:
'1' == 1 // => true;
'1' === 1 // => false;

// course's

// '==' is equals while '===' is strict equals
// == converts the data into the same data type before comparing values

// 'under the hood'
// comparing number and string -> string is converted to number
// comparing boolean and non-boolean -> non-boolean is converted to a boolean
// '1' == true -> true // 0 == false -> true
// comparing object and primitive data-type -> object is converted to primitive data-type
