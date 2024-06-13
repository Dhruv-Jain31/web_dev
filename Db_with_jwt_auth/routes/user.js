const express = require("express");
const userMiddleware = require("../middlewares/user");
const { User } = require("../Db_schema");
const { Course } = require("../Db_schema");
const router = express.Router();
const zod = require("zod")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router