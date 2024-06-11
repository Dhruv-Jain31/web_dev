/*You have to create a middleware for logging the number of requests on a server*/

const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.use(function(req, res, next) {
  requestCount++;
  next();
})

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000) // this will make the object (numberOfRequest...) empty after every second.

app.use(function(req, res, next) {
    const userId = req.headers["userId"];
  
    if (numberOfRequestsForUser[userId]) {  // obejct has one entry with userId as one index and no.of requests as it's value.
  
      numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
      if (numberOfRequestsForUser[userId] > 5){
        res.status(404).send("to many requests")
      }
  
      else{
        next();
      }
  
    }
    else{
      numberOfRequestsForUser[userId] = 1;
      next();
    }
    console.log(numberOfRequestsForUser);

})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3500, function() {
    console.log("running on 3500");
})