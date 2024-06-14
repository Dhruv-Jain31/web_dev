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

    User.findOne({
        username:username
    })
    .then(function(value){
        console.log(value)

        if (value){  // don't use value.username here because
            // If value is null (i.e., no user found), then accessing value.username will result in an error.. 
            res.status(411).json({
                "msg" : "this username already exists"
            })
        }
        else{  // this is put in else condition to prevent race condition.
            //User.create might execute before User.findOne completes.

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
        }
    })
    .catch(function(err){
        res.status(500).json({
            "msg": "there is some issue with our servers",
            "error" : err.message
        })
    });
});    

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username: username, // imp 
    })
    .then(function(user) {
        console.log(user)
        if (!user) {
            // Username is incorrect
            res.status(500).json({
                "msg": "Incorrect username"
            });
        } 
        else if (user.password !== password) {
            // Username is correct, but password is incorrect
            res.status(500).json({
                "msg": "Incorrect password"
            });
        } 
        else {
            // means Username and password are correct
            const token = jwt.sign({ 
                username,
                password
            }, JWT_SECRET);

            const decoded_token = jwt.decode(token, JWT_SECRET);
            console.log(decoded_token);

            res.json({
                "msg": "User sign in successful",
                "token": token
            });
        }
    })
    .catch(function(error) {
        res.status(500).json({
            msg: "Internal server error",
            error: error
        });
    });
});

router.get('/courses', (req, res) => {
    // this end point is open to the world anyone can access it.
    // Implement listing all courses logic
    Course.find({
        isPublished:true
    })
    .then(function(course){
        res.json({
            Courses: course
        })
    })
    .catch(function(error){
        res.status(500).json({
            "msg" : "There is some issue with our server"
        })
    })
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