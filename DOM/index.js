const express = require("express");

const app = express();

app.get("/sum",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = a + b;
    res.send(toString(sum));
})

app.get("/interest",(req,res)=>{
    const principle = req.query.principle;
    const rate = req.query.rate;
    const time = req.query.time;
    const interest = (principle*rate*time)/100;
    const total = principal + interest;
    res.send({
        total: total,
        interest: interest,
    })

});

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})