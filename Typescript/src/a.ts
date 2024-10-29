
function greet(firstName: string) {
    console.log("Hello " + firstName);
}
//type inference: a feature in TypeScript that automatically determines the type of a variable,
//parameter, return type or expression based on the value assigned to it
function sum(a: number, b: number):number {
    return a + b;
}

function islegal(age: number): boolean {
    if (age > 18){
        return true;
    }
    else{
        return false;
    }
}

// callback in typescript. <in argument fn: (argument) => return type>
function run_after_1sec(fn: (c:number, d:number) => number){
    setTimeout(() =>{
        const result = fn(31,25);
        console.log(result);
    },1000)
}

greet("dhruv_jain");
let c: number = sum(31,28);
let d: boolean = islegal(17);
console.log(c);
console.log(d);

run_after_1sec(function(c:number, d: number){
    console.log("this is the callback");
    return c-d;
})