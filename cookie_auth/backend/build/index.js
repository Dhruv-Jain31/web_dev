"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser")); //used to parse the cookie and get the object
const cors_1 = __importDefault(require("cors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
const JWT_SECRET = "test_456";
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:5173" //there is only a single frontend from where cookie will be set. used when frontend and backend are different
}));
app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //do db validations, fetch id of user etc
    const token = jsonwebtoken_1.default.sign({
        id: 1
    }, JWT_SECRET);
    res.cookie("token1", token); //will put the cookie in the set-cookie header
    res.cookie("token2", token); //sets other cookie
    res.send("Yay! Logged in!");
});
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    //get the email of the user from the database
    res.send({
        userTd: decoded.id
    });
    console.log(token);
});
app.post("/logout", (req, res) => {
    res.clearCookie("token1"); //clears the cookie
    res.json({
        "message": "Logged out successfully!"
    });
});
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../src/index.html"));
});
app.listen(3000);
