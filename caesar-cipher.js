// Caesar Cipher converts a string of letters into a new string by shifting each
// letter to the right in the alphabet by a given number
// i.e. "abc", 1 => "bcd"; "hello", 2 => "jgnnq";

// my attempt
function caesarCipher(str, num) {
  // create an Object that matches each alphabet to a number
  let alphabetObj = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9,
    'k': 10,
    'l': 11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25
  }

  strArr = str.split('')
  console.log(strArr);

  console.log(alphabetObj['a'])

  // note forEach method does not alter original array, rather you need to push
  // new values to a new array

  // convert each letter its matching key value and then add the given num param
  numArray = [];
  strArr.forEach(char => {
    numArray.push(alphabetObj[char] + num);
  })
  console.log(numArray);

  // convert the number back to its matching key based on the property value
  convertedArr = [];
  numArray.forEach(char => {
    // if the number is outside of the range of 0-25, add or subtract 25 until
    // it falls into the range so that it can be converted back to a letter
    if (char > 25){
      while (char > 25) char = char -26;
    } else if (char < 0) char = char + 26;
    // Object.keys(myObject) returns an array containing names of all myObject's
    // string properties (i.e. ['a', 'b', ... 'z'] in this case)
    // Array.find() returns the value of the first element in an array that satisfies
    // the provided testing function (in this case where key is equal to property value)
    // note: since all keys are unique in an object, find() method works perfectly here
    // simply put, this line of code returns an object's key based on its matching property value
    convertedArr.push(Object.keys(alphabetObj).find(key => alphabetObj[key] === char));
  })

  return convertedArr.join('');
}

caesarCipher('zoo keeper', 2) // => 'bqqmggrgt' note: does not take special characters into account
