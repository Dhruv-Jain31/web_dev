// callbacks: when functions take other functions as arguments or input.

function sum(num1, num2, fnTocall) {
  let result = num1 + num2;
  fnTocall(result); // passes result into displayResult function
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const ans = sum(1, 2, displayResult); // this displayResult goes as an argument to the sum function.

// callback is not recursion since function is not calling itself.

// this function will call the sum function after a delay of 2 seconds. simarly there is a setInterval function which will call the function after a delay of 2 seconds continously.
function greet() {
  console.log("Hello World");
}
setTimeout(greet, 2 * 1000);
