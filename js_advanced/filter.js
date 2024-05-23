// filter is "NOT A GLOBAL FUNCTION"

const arr = ["Dhruv", "Dhanur", "Dinesh", "Anamika"];

const ans = arr.filter(function logic(n){  // n is the individual value of the array

    if (n.startsWith("Dh")){
        return true;
    }

    else{

        return false;
    }

});

console.log(ans); // true values are pushed into new array and this line has to be
// function logic