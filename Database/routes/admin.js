const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../Db_schema");
const router = express.Router();

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


router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;