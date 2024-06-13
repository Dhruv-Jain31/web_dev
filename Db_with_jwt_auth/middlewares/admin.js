const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config.");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // instead of checking username and password we'll be authenticating json web token

    const token = req.headers.authorization; // make authorization lowercase only.
    // token = Bearer asdedes => ["Bearer", "asdasddr"]
    const words = token.split(" ")
    const jwtToken = words[1] // to get actual token
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.username) {
        next();
    }
    else{
        res.status(403).json({
            msg: "Unauthorized Admin"
        })
    }
}

module.exports = adminMiddleware;