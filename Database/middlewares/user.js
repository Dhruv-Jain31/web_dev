const { User } = require("../Db_schema");  // imports the user model from database.
//it is used to interact with the user collection/table in your database.

// Middleware for handling auth
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. 
    //Check readme for the exact headers to be expected

    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({
        username: username,
        password: password
    })  // returns a promise. then method receives the result of the query as its argument (user). true or false.
    .then(function(user){
        if(admin){
            next()
        }
        else{
            res.status(403).json({
                "msg": "user doesn't exists!"
            })
        }
    })

}

module.exports = userMiddleware;