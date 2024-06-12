const { User } = require("../Db_schema/index.js");// imports the user model from database.
//it is used to interact with the user collection/table in database.

// Middleware for handling auth
// You need to check the headers and validate the user from the user DB. 
    //Check readme for the exact headers to be expected
function userMiddleware(req, res, next) {
    // Ensure headers are present
    const username = req.headers.username;
    const password = req.headers.password;

    if (!username || !password) {
        return res.status(400).json({ 
            "msg": "Missing headers: username or password" 
        });
    }

    // received headers
    console.log(`Received headers - Username: ${username}, Password: ${password}`);

    User.findOne({ 
        username: username, 
        password: password 
    })
    .then(function(value) {
        if (value) {
            console.log("User authenticated successfully");
            next();
        }
        else {
            console.log("User does not exist");
            res.status(403).json({ "msg": "User doesn't exist!" });
            }
        })
    .catch(function(err) {

            console.error("Error querying the database:", err);
            res.status(500).json({ 
                "msg": "Internal server error"
            });
    });
}

module.exports = userMiddleware;
