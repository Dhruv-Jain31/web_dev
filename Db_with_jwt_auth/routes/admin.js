const express = require("express");
const adminMiddleware = require("../middlewares/admin");
const { Admin } = require("../Db_schema");
const { Course } = require("../Db_schema");
const router = express.Router();
const zod = require("zod")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const AdminMiddleware = require("../../Database/middlewares/admin");

// Admin Routes

const signup_schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
})

router.post('/signup', (req, res) => {
    // Implement admin signup logic

    const validation = signup_schema.safeParse(req.body)

    //safeParse returns an object with a success property, not a boolean.
    if(!validation.success){ 
        res.status(400).json({
            msg: "There is a validation error",
            error: validation.error,
        })
    }

    const response = validation.data
    const username = response.username
    const password = response.password

    // Checking whether user exists or not
    Admin.create({
        username: username,
        password: password
    }) // returns a promise

    .then(function(value){
        res.json({

            "msg" : "Admin created successfully"
        });
    })

    .catch(function(err){  // try...catch only works for synchronous code. Promises are asynchronous,
                          // and their errors need to be handled using .catch() method only

        res.status(500).json({

            "msg":"Admin not created",
            "error": "There is some issue with our server."
        });
    });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            const token = jwt.sign({
                username,
                password
            }, JWT_SECRET);

            const decode = jwt.decode(token, JWT_SECRET);
            console.log(decode);
            res.json({
                "msg": "sign in successfully",
                token
            })
        }
        else{
            res.status(500).json({
                "msg": "Incorrect email or Password"
            })
        }
    })
    .catch(function(err){
        res.status(500).json({
            "msg": "internal server error",
            "error": err.message
        })
    })
});

const courseSchema = zod.object({

    title: zod.string(),
    description: zod.string(),
    imageLink: zod.string(),
    price: zod.number()

  });

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic

    const response = courseSchema.safeParse(req.body);

    if(!response.success){
        res.status(411).json({
            "msg": "Invalid Inputs",
            "errors": response.error.errors
        });
    }
    else{
 // accessing the validated data
        const validatedData = response.data;
        const title = validatedData.title;
        const description = validatedData.description;
        const imageLink = validatedData.imageLink;
        const price = validatedData.price;

        Course.create({

            title: title,
            description: description,
            imageLink: imageLink,
            price:price

        })
        .then(function(value){

            res.json({
                "msg" : "Course created successfully",
                courseId: value.id  // returns the course id from the db.
            })

            console.log(value)  // all the values like title, description etc come in value variable.
        })
        .catch(function(err){
            res.status(500).json({
                "msg" : "Course could not be created",
                "error" : "There is some issue with our server"
            })
        })
    }
});


router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then(function(course){
        res.json({
            courses: course
        })

    })
    .catch(function(error){
        res.status(500).json({
            "msg" : "Internal serve error couldn't fetch courses",
            "error": error
        })
    })
});

module.exports = router;