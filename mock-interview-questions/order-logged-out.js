// In what order will the numbers be logged out?

function logNumbers() {
  console.log(1);
  setTimeout(function(){console.log(2)}, 1000);
  setTimeout(function(){console.log(3)}, 0);
  console.log(4);
}

logNumbers();

// => 1, 3, 4, 2

// Actually...
// => 1, 4, 3, 2

// Why does 3 log out after 4, when it is set to run after 0 millisecond Delay?

// event loop in the browser is a queue in which all time-set events in the browser are placed
// i.e. click events, AJAX calls, callbacks, etc

// console.log(1) & console.log(4) run first because they are not placed in the event loop,
// console.log(3) is placed at the top of the event loop and is run after these 2 commands run
