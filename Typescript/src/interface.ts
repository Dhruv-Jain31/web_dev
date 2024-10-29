interface User {
    firstName: string,
    lastName: string,
    age: number
    email?: string // this is an optional argument
};

function legal_age(user: User){
    if (user.age > 18){
        return true;
    }
    else{
        return false;
    }
}

function greeting(user: User){
    console.log("hi there " + user.firstName);
}

const x = legal_age({
    firstName: "Dhruv",
    lastName: "Jain",
    age: 21
})

console.log(x);

greeting({
    firstName: "Dhruv",
    lastName: "Jain",
    age: 21
})