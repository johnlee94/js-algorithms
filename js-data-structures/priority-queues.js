//takes in arrays i.e. ['John Lee', 2]: second element is priority

function PriorityQueue() {
  let collection = [];

  this.printCollection = function() {
      console.log(collection);
  };

  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) { // checking priorities
          collection.splice(i, 0 , element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element)
      }
    }
  }

  this.dequeue = function() {
    collection.shift();
    return value[0];
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return (collection.length === 0);
  }
}

let bankLine = new PriorityQueue();

bankLine.enqueue(['Jessica', 4])
bankLine.enqueue(['Bob', 3])
bankLine.enqueue(['Sal', 2])
bankLine.enqueue(['Mitch', 1])
bankLine.enqueue(['Daniel', 2])
bankLine.front;
bankLine.printCollection();
