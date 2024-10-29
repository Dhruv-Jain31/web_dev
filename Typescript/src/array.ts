type NumberArr = number[];

function maxValue(arr: NumberArr){
    let max  = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxValue([31,28,26]));

interface User {
    firstname: string;
    lastname: string;
    age: number;
}

function filtered_users(users: User[]){
    return users.filter(x => x.age >= 18);
}

console.log(filtered_users([{
    firstname: "Dhruv",
    lastname: "Jain",
    age: 21
},{
    firstname: "Ram",
    lastname: "Gupta",
    age: 31
}]))