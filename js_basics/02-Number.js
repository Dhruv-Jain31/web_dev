function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt it converts a string to int number
explainParseInt("42");
explainParseInt("42px");
explainParseInt("ak42px") // will not work if you have gibberish at the beginning.
explainParseInt("3.14"); // converts to int so only 3 gets printed

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
