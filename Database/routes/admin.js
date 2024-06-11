const express = require("express");
const adminMiddleware = require("../middlewares/admin");
const { Admin } = require("../Db_schema");
const { Course } = require("../Db_schema");
const router = express.Router();
const zod = require("zod");


// Admin Routes
// it does not mean it handles the signup endpoint. it handles /admin/signup end-point.
// in the /admin is not given because in the main index.file we have routed all the admin requests
// to admin.js only.
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

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

    /* The response object can have the following structure if validation is successful:
    {
  success: true,
  data: {
    title: "Course Title",
    description: "Course Description",
    imageLink: "http://example.com/image.jpg",
    price: 100
  }
}

If validation fails, response would have an error structure:
javascript
Copy code
{
  success: false,
  error: {...}
}*/

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
    Course.find({})  // returns an array of all courses
    .then(function(course){

        res.json({
            courses: course
        })

    })
    .catch(function(error){

        res.status(500).json({
            "msg" : "There is some issue with our server"
        })
        
    })
});

module.exports = router;