// ** ES6 SETS **

//The Set object lets you store unique values of any type,
// whether primitive values or object references.

// Syntax: new Set([iterable]);

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5))
// expected output: true

console.log(set1.has(6));
// expected output: false

// properties & methods of Set Instances
.size // returns the number of values in the set

.has(value) // returns a boolean based on if the set has the value

.add(value) // returns the set object, after adding the value to the set

.delete(value) // returns the value that has been deleted after being deleted

.clear() // removes all elements in the set object

.values() // returns a new Iterator object that contains the values in the set
          // in insertion order
          
.keys() //Is the same function as the values() function and returns a new
        // Iterator object that contains the values for each element
        // in the Set object in insertion order.
