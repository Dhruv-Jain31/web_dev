const { Admin } = require("../Db_schema");  // imports the admin model from database.
//it is used to interact with the admins collection/table in your database.

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
    })  // returns a promise. then method receives the result of the query as its argument (admin). true or false.
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