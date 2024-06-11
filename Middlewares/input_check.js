// for input checks primarily zod library is used.
// schema is the inputs that we enter
// parsing is performing checks on the inputs provided.

const express = require("express");
const zod = require("zod")
const app = express();

app.use(express.json());

/*we need to define a schema which is expected by the user as a object which has:
{
    email: string => dj@gmail.com
    password: atleast 8 letters
    country: "IN","US"
    age: number, min 18yrs
} */

function validate_input(obj){
    const schema = zod.object({

        email: zod.string().email(),
        password: zod.string().min(8),
        country: zod.literal("IN").or("US"),
        age: zod.number().min(14),
    })

    const response = schema.safeParse(obj);
    console.log(response);
    return response;

}

app.post("/login",function(req,res){

    const input = req.body
    const response = validate_input(input)
    if(!response.success){
        res.json({
            "msg": "Invalid Inputs",
            "errors": response.error.errors
        });
    }
    else{
        res.json({
            "msg": "login successfull",
            response
        })
    }

})

app.listen(4000, function(){
    console.log("server running on 4000");
});