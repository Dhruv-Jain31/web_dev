const express = require("express");
const userMiddleware = require("../middlewares/user");
const { User } = require("../Db_schema");
const { Course } = require("../Db_schema");
const router = express.Router();
const zod = require("zod")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes

const signup_schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})

router.post('/signup', (req, res) => {
    // Implement user signup logic
    const validation = signup_schema.safeParse(req.body);

    if(!validation.success){
        req.status(400).json({
            message: "There is Validation error",
            error: validation.error
        })

    }

    const response = validation.data;
    const username = response.username;
    const password = response.password;

    User.create({
        username: username,
        password: password,
    })
    .then(function(user){
        res.json({
            "msg": "user created successfully",
            "credentials": user
        })
    })
    .catch(function(err){
        res.json({
            "msg": "Some error occured in creating user",
            "error": err
        })
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const password = req.password;
    console.log(username);
    console.log(password);
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router