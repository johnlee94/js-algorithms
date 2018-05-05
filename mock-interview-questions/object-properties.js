const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

a[b] = 200;
a[c] = 400;

console.log(a[b]);

//my attempt:

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

a[b] = 200;
// => a = { {name: 'b'} : 200 }
a[c] = 400;
// => a = { {name: 'b'} : 200, {name: 'c'} : 400}

console.log(a[b]);
// so this should return 200?

// nope!, returns 400...

// Course
// In javascript, keys in objects can ONLY be strings (not any other data type, not objects!)

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

a[b] = 200;
a[c] = 400;

console.log(a);
// => { '[Object object]' : 400}

// --------------- //

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

// this converts our b object into the string '[Object object]' before adding it as
// a property on our a object, then sets it to 200
a[b] = 200;
// this converts our c object into the string '[Object object]' as well then sets it
// to 400, overwriting the previous property!
a[c] = 400;

console.log(a[b]);
