//interfaces can be implemented as classes..
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void; // means greet is a function with void as return type
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, age: number) {
        this.name = n;
        this.age = age;
    }
    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }
}

class Manager implements Person {
    name: string;
    age: number;

    constructor(n: string, age: number){
        this.name = n;
        this.age = age;
    }
    greet(phrase:string){
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("Dhruv",21);
e.greet("hello there");

const f = new Manager("Dhruv",24);
console.log(f.name);
f.greet("greetings of the day");