// stacks

// functions: push, pop, peek, length

// in JS, arrays are like built-in stacks
// i.e.: using an array as a stack to check palindromes:

let letters = [];

let word = "racecar"

let rword = '';

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

if (word === rword) {
  console.log(`${word} is a Palindrome!~`)
} else console.log(`${word} is not a palindrome :(`)

// Creates a stack
var Stack = function() {
  this.count = 0;
  this.storage = {};

  // adds value to the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++
  }

  // returns and removes value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--
    // finds the last element
    let result = this.storage[this.count];
    delete this.storage[result];
    // returns the deleted element
    return this.result;
  }

  this.size = function() {
    return this.count;
  }

  // returns the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count-1];
  }
}
