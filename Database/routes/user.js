const express = require("express");
const router = express.Router();
const zod = require("zod")
const userMiddleware = require("../middlewares/user");

// User Routes
// it does not mean it handles the signup endpoint. it handles /user/signup end-point.
// in the /user is not given because in the main index.file we have routed all the user requests
// to user.js only.
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({

        username: username,
        password: password,

    })
    res.json({

        "msg": "user created successfully"
    })
});

router.get('/courses', (req, res) => {
    // this end point is open to the world anyone can access it.
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router