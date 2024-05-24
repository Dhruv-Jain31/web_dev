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
