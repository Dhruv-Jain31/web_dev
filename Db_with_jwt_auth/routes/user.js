const express = require("express");
const mongoose = require("mongoose");
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
                "token": "Bearer" + " " + token
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

const courseIdSchema = zod.string().refine(function(value){
    return mongoose.Types.ObjectId.isValid(value);  // checks if value is a valid mongoDb object id.
},{
    message: "Invalid Course id"
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username; // req body contains the username. userMiddleware passed the info
    const password = req.password;
    console.log(username);
    console.log(password);

    const courseIdResult = courseIdSchema.safeParse(req.params.courseId);
    if (!courseIdResult.success) {
        res.status(400).json({

            error: courseIdResult.error
        });
    }

    console.log("Course ID validated:", courseIdResult);
    const courseId = courseIdResult.data

    User.updateOne({
        username: username,
    },{
        "$push" : {
            purchasedCourses : courseId
        }
    })
    .then(function(course){
        res.json({
            "msg" : "Course Purchased successfully!!"
        })
    })
    .catch(function(err){
        res.status(500).json({
            "msg": "Course couldn't be purchased",
            "error": err
        })
    })

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;

    User.findOne({
         username: username
         })
        .then(function(user) {
            if (user) {
                // Find the courses where the _id is in the user's purchasedCourses array
                Course.find({ //it will again return a promise
                    _id: {  // find all the courses with _id(as in mongo) in user.purchasedCourses
                         "$in": user.purchasedCourses 
                        }
                })
                .then(function(courses) {
                    res.json({
                        "msg": "Purchased courses retrieved successfully",
                        "purchasedCourses": courses
                    });
                })
                .catch(function(error) {
                    console.error("Error retrieving courses", error);
                    res.status(500).json({
                        "msg": "Error retrieving purchased courses",
                        "error": error
                    });
                });
            } 
            else {
                res.status(404).json({ "msg": "User not found" });
            }
        })
        .catch(function(error) {
            console.error("Error retrieving user", error);
            res.status(500).json({
                "msg": "Internal server error",
                "error": error
            });
        });
});

module.exports = router