// in async functions you can delegate the task to another thread that is not running
// on the same JS thread. eg: fs.readfile, Fetch

const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("hi there");
let a = 0
for (let i =0; i<1000000; i++){
    a++
}
console.log("hi there",a);

// in this the js thread will continue the execute the whole code instead
// of stuck at the readfile function it will execute the code and readfile
// task will be delegated to some other thread.


