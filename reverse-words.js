// reverse every word in the string
// return the new string

// my attempt!
function reverseWords(string) {
  let wordsArr = string.split(' ');

  reversedWords = [];
  wordsArr.forEach(word => {
    reversedWords.push(word.split('').reverse().join(''));
  })

  reversedStr = reversedWords.join(' ');

  return reversedStr;
}

reverseWords('test is true'); // => tset si eurt;

// Do not use the array.reverse() method..
function reverseWords(string) {
  let wordsArr = string.split(' ');

  let reversedWords = [];
  wordsArr.forEach(word => {
    let currentWord = '';
    for (let i = word.length-1; i > 0; i--) {
      currentWord += word[i];
    }
    reversedWords.push(currentWord);
    currentWord = '';
  })

  return reversedWords.join(' ');
}

// Trying a better solution..
function reverseWords(string) {
  let wordsArr = string.split(' ');

  let reversedWords= [];

  Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
  }

  wordsArr.forEach(word => {
    let placeHolder = '';
    let temporaryArray = [];
    let currentWord = '';
    for (let i = 0; i <= (Math.floor((word.length / 2)) - 1); i++) {
      temporaryArray = word.split('')
      temporaryArray.swap(i, word.length - (i + 1));
    }
    console.log(temporaryArray);
    currentWord = temporaryArray.join('');
    reversedWords.push(currentWord);
    currentWord = '';
    temporaryArray = [];
  })

  return reversedWords.join(' ');
}

reverseWords('test is true') // => returns 'tset si ture'
// I CAN't FIGURE OUT WHY THE LAST WORD ISN'T BEING PROPERLY REVERSED?!
