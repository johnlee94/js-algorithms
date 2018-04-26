// take the given function and curry it
// note: currying is the process of breaking down a function into a series of
// functions that each take a single argument

function getPrdouct(num1, num2) {
  return num1 * num2;
}

// course

// function getPrdouct(num1, num2) {
//   return num1 * num2;
// }

function getProduct(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

getProduct(10)(20);

// what's the purpose of currying?

function getTravelTime(distance, speed) {
  return distance / speed;
}

getTravelTime(600, 50); // => 12 hours

// what if distance never changed? (For example constant like from Boston to NYC)

getTravelTime(400, 50);
getTravelTime(400, 60);
getTravelTime(400, 80);

// currying can reduce this redundancy

function getTravelTime(distance) {
  return function(speed) {
    return distance / speed;
  };
}

const travelTimeBosNyc = getTravelTime(400);

console.log(travelTimeBosNyc); // => returns the inner function

console.log(travelTimeBosNyc(50)); // => returns 8
console.log(travelTimeBosNyc(100)); // => returns 4
// we don't have to code the constant 400 distance again and again

// we can also make other variable functions this way
// i.e.
const travelTimeMiamiAtlanta = getTravelTime(1000);
