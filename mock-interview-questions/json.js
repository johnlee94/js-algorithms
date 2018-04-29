// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

const myJsonObj = {
  myString: [some string],
  myNumber: [some number],
  myNull: [null],
  myBoolean: [false],
  myUndefined: [undefined],
  myArray: [some array],
  myFunction: [some function],
  myObject: [some object]
};

// JSON is a special form of Javascript Object that is commonly used to pass data
// across the web. For example, in an API call

const myJsonObj = {
  myString: 'John is the Awesomest',
  myNumber: 77,
  myNull: null,
  myBoolean: false,
  myUndefined: undefined,
  myArray: ['more stuff', 1, false],
  // Functions aren't allowed?
  // myFunction: [some function],
  myObject: {
    moreNested: 1,
    moreNested2: 'Hello World'
  }
};


// course
// JSON: Javascript Object Notation
// light-weight format for transferring data
// 1. Easy for humans to understand
// 2. Easy for computers to parse & generate

// NOTE: All JSON properties (including nested objects') MUST be strings
const myJsonObj = {
  // Strings must be wrapped in double quotes in JSON!
  "myString": "John is the Awesomest",
  // any number, even decimals are allowed
  "myNumber": 77.7,
  "myNull": null,
  "myBoolean": false,
  // Undefined properties are not allowed
  // note that a property that doesn't exist in a JS object automatically returns undefined
  // myUndefined: undefined,
  // elements in the array must be properly JSON formatted as well!
  "myArray": ["more stuff", 1, false],
  // Functions aren't allowed
  // JSON is used to simply pass data, it is not designed to be parsed with additional logic
  // myFunction: [some function],
  // Objects must be properl JSON formatted as well
  "myObject": {
    "moreNested": 1,
    "moreNested2": "Hello World"
  }
};
