// ** ES6 MAPS!**

// Maps are like basic JS models but the key can be any value
// traditional JS object keys can only be Symbols or Strings
// also Objects have default protoype keys that could collide with an object
// instance, whereas Maps you can make ANYTHING a key!

// syntax: new Map([iterable])
// iterable: An array or other iterable object whos elemets are key-value pairs
// e.g. [[1, 'one']], [[2, 'two']]

// properties & methods:

.size // returns the number or key-value pairs in the Map object

.clear() // removes all key/value pairs

.keys() // returns an array of all keys

.values() // returns an array of all values

.entries() // returns an array of all [key, value] pairs

.forEach(callBackFn, thisArg) // calls callback function on each key-value pair
// if thisArg param is passed, it will be used as the this value for each callback

.has(key) // returns a boolean based on a value has been associated to the key in the Map object

.get(key) // returns value of key or undefined

.set(key, value) // sets value for the key in the Map object, returns Map object

.delete(key) // deletes key, returns the element that has been removed or false if key did not exist


let m = new Map()
let s = Symbol()
m.set('hello', 42)
m.set(s, 34)

m.get(s) // => 34
m.size // => 2

for (let [ key, val ] of m entries()) {
  console.log(key + " = " + val);
}
