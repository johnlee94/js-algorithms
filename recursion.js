// * RECURSION * //

// basic structure:

function func() {
  if (*base case*) {
    return something
  } else { // recursive case
    func()
  }
}

// i.e. Factorial(!)

function factorial(num) {
  if (num === 1) {
    return num;
  }
  else {
    return num * factorial(num - 1);
  }
}
