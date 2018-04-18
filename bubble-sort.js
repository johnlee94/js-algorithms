// my attempt
function bubbleSort(array) {
  // return array, sorted with bubble sort
  let passes = array.length - 1;
  while (passes > 0) {
    for (let i = 0; i < passes - 1; i++) {
      let placeHolder;
      if (array[i] > array[i+1]) {
        placeHolder = array[i];
        array[i+1] = placeHolder;
      }
    }
    passes--;
  }
}

// course's
function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}
