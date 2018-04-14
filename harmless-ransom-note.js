// function that takes 2 parameters: 1, the note (a String) and 2, the
// 'magazine' text (also a String) that may have words needed to compose the note
// --if the magazine has enough of the proper words to compose the note it should
// return true, and if not, should return false (note that each word from the
// magazine text can only be used once!)

// i.e. NOTE: 'this is a secret note for you from a secret admirer'
// MAGAZINE TEXT: 'puerto rico IS A great place YOU must hike FAR FROM town to find
// A SECRET waterfall that i am an ADMIRER of but note that it is not as hard as it
// seems THIS is my advice for you'
// => returns false because 'SECRET' is found only one time inside the magazine text

// note: assume no punctuations and that all letters are lowercased
function harmlessRansomNote(noteText, magazineText) {
  // create arrays of the words from each string
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');

  // utilize a hash table based on how many times the word is present in the array
  // i.e. : 'this is all the magazine text in the magazine'
  // {
  //   this: 1,
  //   is: 1,
  //   all: 1,
  //   the: 2,
  //   magazine: 2,
  //   text: 1,
  //   in: 1
  // }
  var magazineObj = {};

  // note Array.prototype.forEach() method executes a proided function one for each
  // elemet in the array
  magazineArr.forEach(word => {
    // if magazine object doesn't have a property for current word, it will create one
    if (!magazineObj[word]) magazineObj[word] = 0;
    // it will increase the count of the matching word property of the magazine object
    // by 1
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    // check to see if the word is in the magazine, if not set noteIsPossible to false
    if (magazineObj[word]) {
      // if it exists, decrement its count by 1
      magazineObj[word] --
      // to see if we have enough of the words, if count ever falls below 0, set
      // noteIsPossible to false
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });

  return noteIsPossible;
}

// TESTS!!
harmlessRansomNote('will i be able to do this', 'i should be able to do this')
// => false
harmlessRansomNote('will i be able to do this', 'i will be able to do this')
// => true

// end notes: this function is a Linear Time Complexity O(n)
// more specifically, it is of O(n + m) time complexity since it has 
// 2 loops that each loops through its own separate array (with each array having
// its own number of elements or inputs)
