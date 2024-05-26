const express = require("express")

const app = express()

const calculate_requests = 0

function number_of_requests(req,res,next) {
    calculate_requests += 1
    console.log("no.of requests on server are",calculate_requests)
}

app.use(number_of_requests)

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "dhruv" || password != "pass") {
        res.status(400).json({"msg": "invalid user credentials"})
    }
    else{
        next()
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

app.get("/health_checkup", userMiddleware,function(req,res){

    // requied logic

    res.status(200).send("done. proceed furhter")
})

app.get("/kidney_checkup",userMiddleware,kidneyMiddleware,function(req,res){

    // required logic

    res.status(200).send("kidney checkup successfull")
})

app.get("/heart_checkup",userMiddleware,heartMiddleware,function(req,res){
    // req logic

    res.status(200).send("heart checkup successfull")
})

