const express = require("express")

const app = express()

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
}

