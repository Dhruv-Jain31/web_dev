const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // instead of checking username and password we'll be authenticating json web token

    const token = req.headers.authorization; // make authorization lowercase only.
    // token = Bearer asdedes => ["Bearer", "asdasddr"]
    if (!token) {
        return res.status(403).json({
            msg: "No token provided"
        });
    }

    const words = token.split(" ")

    if (words.length !== 2 || words[0] !== "Admin") { // since admin is logging in
        return res.status(403).json({
            msg: "Invalid token format"
        });
    }

    const jwtToken = words[1] // to get actual token

    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        console.log(decodedValue)

        if (decodedValue.username && decodedValue.password) {
            next();
        }
        else{
            res.status(403).json({
                msg: "Unauthorized Admin"
            })
        }
    }
    catch (err) {
        if (err.name === "JsonWebTokenError") {
            return res.status(403).json({
                msg: "Unauthorized Admin",
                error: err.message
            });
        }
        // to Handle other errors
        res.status(500).json({
            msg: "Incorrect inputs provided",
            error: err.message
        });
    }
}

module.exports = adminMiddleware