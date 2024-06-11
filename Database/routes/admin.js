const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();

// Admin Routes
// it does not mean it handles the signup endpoint. it handles /admin/signup end-point.
// in the /admin is not given because in the main index.file we have routed all the admin requests
// to admin.js only.
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;