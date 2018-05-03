// Describe the bind() function method

// 1. Describe how it works
// 2. Explain the parameter that it takes
// 3. Code out an example of how bind() is used

// the Function.prototype.bind() method allows you to bind 'this' of a functon to
// the context of a particular object

this.distance = 10000;

const roadTrip1 = {
  distance: 3000,
  getDistance: function() {
    return this.distance;
  }
};

const roadTrip2 = {
  distance: 5000
}

const getTripDistance = roadTrip1.getDistance();
getTripDistance();
// => returns 10000 because the context of 'this' is in the global scope, even
// if the function is being called from the roadTrip1 object!

const getTripDistance2 = roadTrip1.getDistance.bind(roadTrip1);
getTripDistance2();
// => returns 3000 because the context of 'this' is now in the scope of the roadTrip1
// object scope thanks to the bind() method

const getTripDistance = roadTrip1.getDistance.bind(roadTrip2);
getTripDistance3();
// => returns 5000 because the context of 'this' is now in the scope of the roadTrip2 object


// You can also pass in parameters after the first argument being referred to the ThisObject
// i.e.

const roadTrip3 = {
  distance: 7000,
  getDistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};

// the second argument 'km' is plugged into the unit paramter when getDistance is invoked
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');

// you can also pass in the arguments directly when calling the function itself
// in this case, ' in total' is passed as the caption parameter when getDistance is invoked
getTripDistance(' in total');
// returns 7000km in total
