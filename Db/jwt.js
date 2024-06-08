/*create a website which has 2 endpoints.

1.POST /signin
Body - {
username: string
password: string
}
Returns a json web token with username and password encrypted

2. GET /users
Headers -
Authorization header
Returns an array of all users if user is signed in except the signend in user. (token is correct)
Returns 403 status code if not
*/ 

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456"; // password on the server used for verification

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "dhruv@gmail.com",
    password: "123",
    name: "dhruv jain",
  },
  {
    username: "ram@gmail.com",
    password: "123321",
    name: "Ram sharma",
  },
  {
    username: "priya@hotmail.com",
    password: "123321",
    name: "Priya gupta",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array

  let userExists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username, password: password }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization; // we'll send the json token as the auth. header
  try {
    const decoded = jwt.verify(token, jwtPassword); // decoded is the original json object which contains the details 
    // of the decrypted token. jwt.verify will decrypt the token and will store details in decoded variable

    const username = decoded.username;
    const password = decoded.password;

    // return a list of users other than this username
    res.json({
      users: ALL_USERS.filter(function(value){
        if (value.username == username && value.password == password) {  // in filter function value will take the individual in array.
          return false;
        }
        else{
          return true;
        }
      })
    })
  }
   catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,function(){
  console.log("server running on 3000");
})