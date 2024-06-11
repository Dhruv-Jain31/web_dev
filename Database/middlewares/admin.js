const { Admin } = require("../Db_schema");  // imports the admin model from databse

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. 
    //Check readme for the exact headers to be expected

    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({
        username: username,
        password: password
    })  // returns a promise
    .then(function(admin){
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

module.exports = adminMiddleware;