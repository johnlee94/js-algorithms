// sets!!
// sets are like an array but values must be unique (no duplicates)

// note that ES6 implemented Sets but doesn't have all the methods
// ES6 methods: values, add, delete, size(property not a function)

function mySet(values) {
  let collection = [];

  if(values) {
   values.forEach(value => {
      collection.push(value);
    });
  }

  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  };

  this.values = function() {
    return collection;
  };

  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function(element) {
    if(this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function() {
    return collection.length;
  };

  // this method will return the union of two sets
  this.union = function(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(function(e) {
      unionSet.add(e);
    });

    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  // this method will return the difference of two sets as a new set
  this.difference = function(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(function(e) {
      if (!otherSet(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  // this method will test if the set is a subset of a different set
  this.subset = function(otherSet) {
    let firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  };

}

// creates new Set
let mattSet = new mySet();
// adds shit
mattSet.add('stupid');
mattSet.add('sorry');
mattSet.add('sex');
// checks mattSet's values
console.log(mattSet.values())
// returns true cause mattSet has sex
console.log(mattSet.has('sex'))
// removes the sex :(
mattSet.remove('sex');
console.log(mattSet.values());

// creates a new set: lifeSet
let lifeSet = new mySet(['job', 'Collin']);
console.log(lifeSet);

// Unions mattSet with lifeSet as bestSet
let bestSet = mattSet.union(lifeSet);
// mattSet remains unchanged!
console.log(mattSet.values());
console.log(bestSet.values());
