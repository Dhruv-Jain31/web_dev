const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin");
const { User } = require("../Db_schema");
const router = Router();
const zod = require("zod")
const { JWT_SECRET } = require("../config.");

// Admin Routes
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

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.user.username;
    const password = req.user.password;

    User.find({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            const token = jwt.sign({
                username,
                password
            }, JWT_SECRET);

            res.json({
                token
            })
        }
        else{
            res.status(500).json({
                "msg": "Incorrect email or Password"
            })
        }
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;