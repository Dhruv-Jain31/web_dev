const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://dhruv:dhruv@cluster0.9nyvtnq.mongodb.net/course_selling_app2');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,

    /*This field is an array of ObjectIds.
type: mongoose.Schema.Types.ObjectId indicates that each element in the array is a MongoDB ObjectId.
ref: 'Course' creates a reference to the Course collection.
This means each ObjectId in the purchasedCourses array corresponds to a document in the Course collection.*/
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    Price: Number,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}