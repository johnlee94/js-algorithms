//Should log to console from 1 to number, replacing numbers divisible by 3 with
// string 'Fizz', numbers divisible by 5 with 'buzz', and numbers divisible by both
// 3 and 5 with 'FizzBuzz'
// i.e. fizzBuzz(20) => 1, 2, Fizz, 4,Buzz, ..., 14, Fizzbuzz, 16, ... 20

// Mine
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    // this if statement needs to be read first so that a number
    // divisible by both 3 & 5 is not picked up by the other if statements
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else { console.log(i)}
  }
}

// Course
function fizzBuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i)
  }
}
