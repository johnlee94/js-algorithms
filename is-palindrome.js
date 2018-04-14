// should return true or false based on if param is a palindrome
// a palindrome is a word that is the same whether is spelled backwards or
// forwards; i.e. 'racecar'

// note: should work despite uppercased letters or punctuation marks
function isPalindrome(string) {
  // lower case the string to deal with only lowercased letters
  string = string.toLowerCase();
  // this is an array of the string
  let charactersArr = string.split('');
  // create an array of permitted characters (so special characters
  // such as punctuation marks are removed) to compare the string to
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz';

  // create an array of the string with only the permitted characters
  let lettersArr = [];
  charactersArr.forEach(char => {
    // note: indexOf() method returns the index of an array or string with that
    // paramter, if it doesn't exist it returns -1
    if (validCharacters.indexOf(char) > -1) {
      lettersArr.push(char);
      }
    });

  // this is the new string with lowercased, only-permitted characters
  let permittedString = lettersArr.join('')
  // this is the same string but reversed
  let reversedString = lettersArr.reverse().join('');

  // compare the two and see if the original string is indeed a palindrome
  if (permittedString === reversedString) return true;
  else return false;
}

isPalindrome("Madam I'm Adam") // returns true;
isPalindrome("Madam I'm Adams") //returns false;
