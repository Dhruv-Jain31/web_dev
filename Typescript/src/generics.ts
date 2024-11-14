/*Generics allow you to define a template or a blueprint for functions, classes, or interfaces,
which can then be reused with any data type. It’s like saying,
"This function works for any type of data you give me — just tell me what type it is!"

benefits:
1.Reusability: One function can work with any type of data.

2.Type Safety: When you use a generic function or class, you specify the type (like number, string, or an object type),
and TypeScript locks that type in for the rest of the function. So while the function is defined to work with "any" type,
it’s only flexible at the point of use. After you specify the type, TypeScript enforces that type throughout the function’s execution.

3.Readability: It makes the intent of the code clear. We know that a function is meant to work with different types.

4. Constraints: Sometimes, you want to restrict the type that can be used with a generic. Let’s say you’re building a function
that only works with types that have a length property (like strings or arrays). You can use constraints to enforce this.*/

function identity<T>(arg: T) : T{
    return arg;
}

let output1 = identity<string>("my_String");
output1 = output1.toUpperCase() // since output1 is of type string
console.log(output1);
let output2 = identity<number>(100);
console.log(output2);




