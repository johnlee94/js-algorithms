// sets!!
// sets are like an array but values must be unique (no duplicates)

// note that ES6 implemented Sets but doesn't have all the methods
// ES6 methods:

function mySet() {
  let collection = [];

  this.has = function(element) {
    return (collection.indexOf(elemenet) !== -1);
  };

  this.values = function() {
    return collection;
  };

  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(elemenet);
      return true;
    }
    return false;
  };

  this.remove = function(element) {
    if(this.has(elemenet)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

}
