/*Generics allow you to define a template or a blueprint for functions, classes, or interfaces,
which can then be reused with any data type. It’s like saying,
"This function works for any type of data you give me — just tell me what type it is!"

benefits:
1.Reusability: One function can work with any type of data.

2.Type Safety: When you use a generic function or class, you specify the type (like number, string, or an object type),
and TypeScript locks that type in for the rest of the function. So while the function is defined to work with "any" type,
it’s only flexible at the point of use. After you specify the type, TypeScript enforces that type throughout the function’s execution.

3.Readability: It makes the intent of the code clear. We know that a function is meant to work with different types.*/

function identity<T>(arg: T) : T{
    return arg;
}

let output1 = identity<string>("my_String");
output1 = output1.toUpperCase() // since output1 is of type string
console.log(output1);
let output2 = identity<number>(100);
console.log(output2);

function getFirstElement<T>(arr :T[]): T {
    return arr[0];
}

interface teacher{
    name: string;
    id: number;
    present: boolean;
}

let a1 = getFirstElement<string>(["Dhruv_Jain", "Ram_Gupta"]);
console.log(a1.toLowerCase());

let a2 = getFirstElement<number>([1,2]);
console.log(a2);

let a3 = getFirstElement<boolean>([true,false]);
console.log(a3);

let a4 = getFirstElement<string | number>(["Dhruv_Jain", "Ram_Gupta", 1,2]);
console.log(a4);

let a5 = getFirstElement<teacher>([
    {name:"Saroj",id:1,present:false},
    {name:"Anil",id:2,present:true},
    {name:"Ravi",id:3,present:true}
]);
console.log(a5);

/*4. Constraints: Sometimes, you want to restrict the type that can be used with a generic. Let’s say you’re building a function
that only works with types that have a length property (like strings or arrays). You can use constraints to enforce this.*/

function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

logLength("Hello"); // Works: string has a length
logLength([1, 2, 3]); // Works: array has a length
//logLength(123); // ❌ Error: number doesn't have a length

