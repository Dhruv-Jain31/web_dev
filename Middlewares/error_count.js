const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// error handling middleware always added at the last.

app.use(function(err,req,res,next){
    res.status(404).send({"error":"There is some issue"})
    errorCount = errCount + 1;
})

app.listen(3600);
