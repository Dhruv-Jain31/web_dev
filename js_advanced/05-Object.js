// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj); // puts all the keys in an array as strings.
  console.log("After Object.keys():", keys);

  let values = Object.values(obj); // puts all the values in array as strings.
  console.log("After Object.values():", values);

  let entries = Object.entries(obj); // forms an 2d array in which the key-values
  // pairs forms another array and inside that array they are stored as strings.
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("key1"); // returns a bool value
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" }); // used to merge
  // two objects together.
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
