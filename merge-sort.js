// *** MERGE SORT! ***

function mergeSort(arr) {
  // take in a single, unsorted array as a param, split the array into 2 halves
  if (arr.length = 1) return arr;
  else {
    let mid = Math.floor(arr.length / 2);
    return mergeSort(arr.slice(0, mid)) + mergeSort(arr.slice(mid, array.length));
  }
}

function merge (arr1, arr2) {
  // takes in two sorted arrays as params, merges them into one sorted array
  // returns one sorted array
  let newArr = [];

}

// course's

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length/2);
  let firstHalf= arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);

}

function merge (arr1, arr2) {
  let result = [];
  while (arr1.length && arr2.length) {
    let minElem;
    // note that .shift() returns the element that has been deleted
    if (arr1[0] < arr2[0]) minElem = arr1.shift();
    else minELem = arr2.shift();
    result.push(minElem);
  }
  // when the while loop finishes, there will be one array with at least
  // one element remaining which we will then have to add to the result array
  if (arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);
}
