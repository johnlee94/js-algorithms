// Returns every pair of numbers from 'numArray' that adds up to the 'sum'

// my attempt (combinations are unique)
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

// combinations don't have to be unique

// Course's

function twoSum(numArray, sum) {
  let pairs = [];
  // going to push all numbers into hashtable as we loop so we have fast look up
  let hashtable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    // declare a counterpart for the current number that will add to sum
    let counterpart = sum - currNum;
    // if counterpart is in hashtable, that means its also inside numArray
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    // push every number in numArray into hashtable so we can reference it as we go
    hashtable.push(currNum)
  }

  return pairs;
}
