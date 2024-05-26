// adding user auth. to our hospital system.

const express = require("express");
const app = express();

app.get("/health_checkup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != "dhruv" && password != "pass") {
        res.status(411).json({"msg": "wrong inputs given"})
        return
    }

    if (kidneyId != 1 || kidneyId != "2") {
        res.status(411).json({"msg": "invalid inputs given"})
    }

    res.status(200).send("checks done. WELCOME!!")
})

app.listen(3000);