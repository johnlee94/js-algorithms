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

  // note forEach method does not alter original array, rather you need to push
  // new values to a new array

  // convert each letter its matching key value and then add the given num param
  numArray = [];
  strArr.forEach(char => {
    numArray.push(alphabetObj[char] + num);
  })

  // convert the number back to its matching key based on the property value
  convertedArr = [];
  numArray.forEach(char => {
    // if the number is outside of the range of 0-25, add or subtract 26 until
    // it falls into the range so that it can be converted back to a letter
    if (char > 25) {
      while (char > 25) char = char -26;
    } else if (char < 0) {
      while (char < 0) char = char + 26;
    }
    // Object.keys(myObject) returns an array containing names of all myObject's
    // string properties (i.e. ['a', 'b', ..., 'z'] in this case)
    // Array.find() returns the value of the first element in an array that satisfies
    // the provided testing function (in this case where key is equal to property value)
    // note: since all keys are unique in an object, find() method works perfectly here
    // simply put, this line of code returns an object's key based on its matching property value
    convertedArr.push(Object.keys(alphabetObj).find(key => alphabetObj[key] === char));
  })

  return convertedArr.join('');
}

caesarCipher('zoo keeper', 2) // => 'bqqmggrgt' note: does not take special characters into account

// Course's
function caesarCipher (str, num) {
  // edge case: if num is greater than 26 or less than -26, use modulus to keep
  // the num within the appropriate range
  num = num % 26;

  let lowerCaseString = str.toLowerCase();
  // we are gonna use the alphabets array to keep track of the letter's position
  // based on its index
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = ''

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    // if the character is a space, just add a space to newString without going through
    // rest of the steps in the loop
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    // convert letter to the matching alphabets array index (i.e. a -> 0, z -> 25)
    let currentIndex = alphabets.indexOf(currentLetter);
    // add the given num param
    let newIndex = currentIndex + num;
    // if the shifted number is greater than 25 or less than 0, subtract or add 26
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    // another edge case: if the original letter was uppercase, add the converted
    // letter in uppercase form
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabets[newIndex].toUpperCase();
    }
    // alphabets[newIndex] represents the matching letter of the newly shifted index
    else newString += alphabets[newIndex];
  }

  return newString;
}

caesarCipher('Zoo keeper', 28); // => 'Bqq mggrgt'
