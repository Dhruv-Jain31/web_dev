// for input checks primarily zod library is used.
// schema is the inputs that we enter
// parsing is performing checks on the inputs provided.

const express = require("express");
const zod = require("zod")
const app = express();

/*we need to define a schema which is expected by the user as a object which has:
{
    email: string => dj@gmail.com
    password: atleast 8 letters
    country: "IN","US"
    age: number, min 18yrs
} */

function validate_input(obj){
    
}