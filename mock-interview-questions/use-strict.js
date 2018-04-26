'use strict';

// What does using 'strict mode' do to your code?
// What are the benefitss of using 'strict mode'?

// course's answers

// main purpose: enforce stricter parsing and error handling in your code
// useful things:

// // 1. Prevents the use of global variables
// // i.e.
city = 'London' // => becomes a global variable without using var, let, const
'use strict' // => city is not defined

// // 2. All parameter names must unique
// // i.e.
function myFunc(a, a, b) {
  console.log(a, a, b);
}

myFunc(1, 2, 3) // => 2, 2, 3 (the second parameter overrides the first one)
'use strict' // => argument name clash

// // 3. cannot delete things that should not be deleted
// // i.e.
delete Object.prototype; // => no error
'use strict' // => error

// fail fast and fail loudly
// it's better to find the error earlier than later down the line!
