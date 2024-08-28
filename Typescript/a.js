"use strict";
function greet(firstName) {
    console.log("Hello " + firstName);
}
function sum(a, b) {
    return a + b;
}
function islegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
greet("dhruv_jain");
let c = sum(31, 28);
let d = islegal(17);
console.log(c);
console.log(d);
