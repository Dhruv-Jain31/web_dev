/*create a website which has 2 endpoints.

1.POST /signin
Body - {
username: string
password: string
}
Returns a json web token with username encrypted

2. GET /users
Headers -
Authorization header
Returns an array of all users if user is signed in (token is correct)
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

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)