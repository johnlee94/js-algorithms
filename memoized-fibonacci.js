// Memoization:
// -check to see if number already exists in cache
//   -if number is in cache, use that number
//   -if number is not in cache, calculateit and put it in cache so it can be used
//   multiple times in future

// O(n) run time
function fibMemo(index, cache) {
  // index: index of number in fibonacci Sequence
  // cache: an array used as memory
  cache = cache || [];

  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }

  return cache[index];
}

fibMemo(12); // => 144
