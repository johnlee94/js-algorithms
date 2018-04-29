// build a function that can be invoked in two different ways (singly and doubly)

// my attempt
function getTotal(num1, num2) {
  if (num2) {
    return num1 + num2
  } else {
    return function(num3) {
      num1 + num3
    }
  }
}

getTotal(10, 20);

getTotal(10)(20);

// course's
function getTotal() {
  // arguments is a keyword in js that is an array-like object
  // i.e. {0: firstArgument, 1: secondArgument, ...}
  // we are using the call method to invoke a built-in Array method, slice,
  // to make an array of our arguments as individual elements
  // note .slice() works here only because arguments is an ARRAY-LIKE object
  var args = Array.prototype.slice.call(arguments);

  console.log(args)

  if (args.length === 2) {
    return args[0] + args[1];
  }
  else if (args.length === 1) {
    return function(num2) {
      return args[0] + num2;
    }
  }
}

console.log(getTotal(10)(20));

getTotal(5)(40);

getTotal(10, 20);

// ES6 Solution!
function getTotal(...nums) {
  if(nums.length === 1) {
    return function(num2) {
      return nums[0] + num2;
    }
  } else {
    return nums[0] + nums[1];
  }
}
