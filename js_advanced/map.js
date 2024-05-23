//create a map function that takes 2 inputs an array and a transformation function and 
//transforms the array into a new one using the transformation function in javascript.
// map is a "GLOBAL JS" function

function own_map(array,transform){

    const result = []
    for (let i = 0; i < array.length; i++) {

        const transformed_element = transform(array[i]);

        result.push(transformed_element)
    }

    return result
}

//eg
const number = [1,2,3,4,5,6,7,]

function square(i){
    return i*i
}

const squared_numbers = own_map(number, square)
console.log(squared_numbers);