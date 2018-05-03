// What is logged out?

const user1 = {
  name: 'Jordan',
  age: 28,
};

const user2 = {
  name: 'Jordan',
  age: 28,
};

console.log(user1 == user2);
console.log(user1 === user2);

// my guess:
// => First, true because the objects are converted to primitive data type before
// being loosely compared
// => Second, false because the objects themselves are separate objects


// Actual:
// both return false! -> This is because two different objects are never equal to each other
// and that is because in JS we pass objects by reference, not by value

// However, if we set const user2 = user1;
// Both will return true because both variables are referencing the same object


// So how can we compare if the contents of an object are the same?
// One way is to turn the objects into strings before comparing themselves

// this turns the object into a JSON object and then turns them into strings
console.log(JSON.stringify(user1) === JSON.stringify(user2)) // => true

// NOTE: arrays work the same ways because they are objects in JS!
console.log([] == []); // => false
console.log(JSON.stringify([]) === JSON.stringify([])); // => true
