// premise: set up an array of trues and devalidate them to false if they are
// part of the multiples

// optimization: stop looping through at the square root of "num"

function sieveOfEratosthenes(num) {
  // return all prime numbers up to num in an array
  // i.e. sieveOfEratosthenes(20); // => [2, 3, 5, 7, 11, 13, 17, 19]
  let primes = [];
  for (let i = 0; i <= num; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j * i < num; j++) {
      primes[i * j] = false;
    }
  }

  let results = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      results.push(i);
    }
  }
  return results;
}

sieveOfEratosthenes(100);
