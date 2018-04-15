// takes an array as a param and returns that array (NOT a new array) in reversed
// order

// my attempt
function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = temp;
  }
  return arr;
}

reverseArrayInPlace(['hello', 'k,bye', 'word']) // => ['word', 'k, bye', 'hello']

// Course's
function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    arr[i]= arr[arr.length - 1 - i];
    arr[arr.length - 1 - i];
    arr[length - 1 - i] = tempVar;
  }

  return arr;
}
