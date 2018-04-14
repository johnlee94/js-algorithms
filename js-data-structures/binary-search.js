function binarySearch(sortedArray, key) {
  var low = 0;
  var high = sortedArray.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = sortedArray[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid -1;
    } else {
      return mid;
    }
  }
  return -1;
}

var myArray = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30, 34, 36, 40, 51]

binarySearch(myArray, 17); // => 1 (Since 17 is the second element in the sorted Array)
