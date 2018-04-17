// Returns every pair of umbers from 'numArray' that adds up to the 'sum'

// my attempt
function twoSum(numArray, sum) {
  nums = new Set();
  combinations = new Map();


  numArray.forEach(num => {
    if(!nums.has(num)) {
      for (let i = numArray.indexOf(num); i < numArray.length; i++) {
        if (num + numArray[i] === sum) {
          nums.add(num);
          nums.add(numArray[i]);
          combinations.set(num, numArray[i])
        }
      }
    }
  });

  allCombinations = [];
  for (let [num1, num2] of combinations.entries()) {
    allCombinations.push([num1, num2]);
  }

  return allCombinations;
}

twoSum([1,2,3,4,5,6,7,8,9,10], 11);
