const express = require("express");
const router = express.Router();
const zod = require("zod")
const userMiddleware = require("../middlewares/user");
const { User } = require("../Db_schema");
const { Course } = require("../Db_schema");
const mongoose = require("mongoose")

// User Routes
// it does not mean it handles the signup endpoint. it handles /user/signup end-point.
// in the /user is not given because in the main index.file we have routed all the user requests
// to user.js only.

const userSchema = zod.object({

    username: zod.string().email(),
    password: zod.string().min(6),

})

router.post('/signup', (req, res) => {
    // Implement user signup logic
    const response = userSchema.safeParse(req.body)

    if (!response.success){

        res.status(411).json({

            "msg" : "enter a valid email or password"

        })
    }
    else{
        // accessing the validated data
    const validatedData = response.data
    const username = validatedData.username
    const password = validatedData.password

    User.create({
        username: username,
        password: password,
    })
    .then(function(user){
        res.json({

            "msg" : "user created successfully"

        })
    })
    .catch(function(error){
        res.status(500).json({
            "msg": "User cannot be created",
            "error" : "There is some error with our server"
        })
    })

    }
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

/*refine method allows adding custom validation logic to the schema. This method takes two arguments:
A validation function: This function contains the custom logic to validate the value.
An options object: This object can have properties like message to specify the error message if the validation fails.*/

const courseIdSchema = zod.string().refine(function(value){
    return mongoose.Types.ObjectId.isValid(value);  // checks if value is a valid mongoDb object id.
},{
    message: "Invalid Course id"
});

const usernameSchema = zod.string()

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    //validating course id
    const courseIdResult = courseIdSchema.safeParse(req.params.courseId);
    if (!courseIdResult.success) {
        res.status(400).json({

            error: courseIdResult.error
        });
    }

    console.log("Course ID validated:", courseIdResult);

    // validating username
    const usernameResult = usernameSchema.safeParse(req.headers.username);
    if (!usernameResult.success){
        res.status(400).json({

            error: usernameResult.error

        });
    }

    console.log("Username validated:", usernameResult.data);


    //important step need to fetch data from these objects. access the validated data
    const courseId = courseIdResult.data;
    const username = usernameResult.data;

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
            "error": console.error(err)
        })
    })

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    User.findOne({
        username: username,
    })
    .then(function(user){
        if(user){
            res.json({
                "Purchased Courses": user.purchasedCourses
            })
        }
        else{
            res.status(500).json({
                "msg": "User not found"
            })
        }
    })
    .catch(function(error){
        console.error("Error retrieving purchased courses",error)
        res.status(500).json({
            "msg" : "Internal server error"
        })
    })
});

module.exports = router