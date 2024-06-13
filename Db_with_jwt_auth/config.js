
// it is added to remove circular dependency between admin.js and index.js. index.js was
// importing from admin.js and admin.js is importing from index.js

module.exports = {
    JWT_SECRET : "dj_server"
}