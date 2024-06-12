const express = require("express");
const router = express.Router();
const zod = require("zod")
const userMiddleware = require("../middlewares/user");
const { User } = require("../Db_schema");

// User Routes
// it does not mean it handles the signup endpoint. it handles /user/signup end-point.
// in the /user is not given because in the main index.file we have routed all the user requests
// to user.js only.

const userSchema = zod.object({

    username: zod.string().email(),
    password: zod.string().password(),

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

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username

    User.updateOne({
        username: username,
    },{
        purchasedCourses : {
            "$push" : courseId
        }
    });

    res.json({
        message: "Purchase completed successfully."
    })

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router