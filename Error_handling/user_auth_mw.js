const express = require("express")

const app = express()

let calculate_requests = 0

function number_of_requests(req,res,next) {
    calculate_requests += 1
    console.log(calculate_requests)
    next()
}

app.use(number_of_requests) /* this middleware is called by every request. so by using app.use no need
to define it in every request. */

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "dhruv" || password != "pass") {
        res.status(400).json({"msg": "invalid user credentials"})
    }
    else{
         next() /* in chain of functions this next will call other function*/
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId !=2) {
        res.status(0).json({"msg" : "invalid inputs"})
    }
    else{
        next()
    }
}

function heartMiddleware(req,res,next){
    const heart_status = req.query.heart_status;

    if (heart_status == "healthy"){
        res.status(200).json({"msg" : "healthy heart"})
    }
    else{
        res.status(400).json({"msg" : "unhealthy heart"})
        next()
    }
}

// this function does the user checks only so it calls usermiddleware only.
app.get("/health_checkup", userMiddleware,function(req,res){

    // requied logic

    res.status(200).send("done. proceed furhter")
})

app.get("/kidney_checkup",userMiddleware,kidneyMiddleware,function(req,res){

    // required logic

    res.status(200).send("kidney checkup successfull")
})

app.get("/heart_checkup",userMiddleware,heartMiddleware,function(req,res){
    // required logic

    res.status(200).send("heart checkup successfull")
})

// global catch: middleware with 4 inputs used to handle exceptions.

app.use (function(err,req,res,next){

    res.status(500).json({
        "msg" : "Sorry there is a issue with our Server"
    })
})

app.listen(4000);