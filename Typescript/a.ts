
function greet(firstName: string) {
    console.log("Hello " + firstName);
}

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

greet("dhruv_jain");
let c: number = sum(31,28);
let d: boolean = islegal(17);
console.log(c);
console.log(d);