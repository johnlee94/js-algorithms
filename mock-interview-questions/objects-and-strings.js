var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';

console.log(string2);


////////////////////////////////


var person1 = {
  name: 'Alex',
  age: 30
};

var person2 = person1;

person2.name = 'Kyle';

console.log(person1);

// my attempt:

console.log(string2) // => 'Tampa'

console.log(person1) // => { name: 'Kyle', age: 30 }

// I'M ACTUALLY RIGHT FOR ONCE! <(O.O<) <(O.O)> (>O.O)>
