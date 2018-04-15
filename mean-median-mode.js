// my attempt!
function getMean(array) {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function getMedian(array) {
  // gotta sort then find the midpoint
  array.sort((a, b) => {
    return a - b;
  })

  if (array.length % 2 === 0) {
    let first = array.length / 2 -1;
    let second = array.length / 2;
    return (first + second) / 2;
  } else return array[Math.floor(array.length / 2)];
}

function getMode(array) {
  let obj = {};
  for (let i = 0; i <= array.length - 1; i++) {
    if (!obj[array[i]]) obj[array[i]] = 0;
    obj[array[i]]++;
  }
  return(
    Object.keys(obj).reduce((a, b) => {
      if (obj[a] >  obj[b]) {
        return obj[a];
      } else return obj[b];
    })
  );
  // edge case: if every element is unique... then there is no mode
  // also if there are multiple highest frequencies, there are multiple modes

 // // my attempt at edge cases: (doesn't work :( )
 // let modes = [];
 //    console.log(obj)
 //
 //    console.log(Object.keys(obj))
 //
 //    let keysArray = Object.keys(obj);
 //
 //    keysArray.forEach((key, index, array) => {
 //      // if (index === keysArray.length -1) break?;
 //      counter = 1
 //      let next = keysArray[counter]
 //      console.log(obj[key])
 //      console.log(obj[next])
 //      if (obj[key] > obj[next]) {
 //        modes = [key];
 //      } else modes = [next];
 //      if (obj[key] === [obj[next]]) modes.push(next);
 //      counter++
 //    })
 //
 //    // edge case: if every element is unique... then mode is none
 //    if (modes.length === keysArray) return 'none'
 //    else return modes;
}

// call other 3 functions
// return obj which has mean, median, and mode on it
function meanMedianMode(array) {
  let finalObj = {};

  finalObj['mean'] = getMean(array);
  finalObj['median'] = getMedian(array);
  finalObj['mode'] = getMode(array);

  return finalObj;
}

// Course's

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array) {
  var sum = 0;

  array.forEach(num => {
    sum += num;
  });

  var mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  array.sort(function(a, b){return a-b});
  var median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array) {
  var modeObj = {};

  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  // create array of mode/s
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}


meanMedianMode([9,10,23,10,23,9]);
