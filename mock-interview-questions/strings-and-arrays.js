const data1 = 'Jordan Smith';

const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});

console.log(data2);

// my guess

console.log(data2) // => returns 'Smith'

// ACTUALLY
console.log(data2) // => returns ['S', 'm', 'i', 't', 'h']

// note: you can use certain array methods on strings!
// only use 'read-only' methods: filter, forEach, map, some, every, etc.
// cannot use methods that manipulate the array: push, pop, slice, shift, reverse, etc.

// note: [].filter is same as Array.prototype.filter

const data1 = 'Jordan Smith';

// we are using the call method to use the Array.prototype.filter method on our string
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
