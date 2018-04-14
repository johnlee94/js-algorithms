// reverse every word in the string
// return the new string

// my attempt!
function reverseWords(string) {
  let wordsArr = string.split(' ');

  reversedWords = [];
  wordsArr.forEach(word => {
    reversedWords.push(word.split('').reverse().join(''));
    console.log(word)
  })

  reversedStr = reversedWords.join(' ');

  return reversedStr;
}

reverseWords('test is true'); // => tset si eurt;
