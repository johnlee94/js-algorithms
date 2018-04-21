tripleAdd(10)(20)(30); // returns 60

// my attempt
function tripleAdd(num1, num2, num3) {
  return num1 + num2 + num3;
}

tripleAdd(10, 20, 30);

// again

function tripleAdd(num) {
  return function tripleAdd2(num2) {
    return function tripleAdd3(num3) {
      return num + num2 + num3;
    }
  }
}

tripleAdd(10)(20)(30);

// course's

function tripleAdd(num) {
  return function(num2) {
    return function(num3) {
      return num + num2 + num3;
    }
  }
}

// extra

function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}
// note the nested functions can take multiple arguments;

quadrupleAdd(10)(20)(30, 40);
