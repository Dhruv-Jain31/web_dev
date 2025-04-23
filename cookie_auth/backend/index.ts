import express from "express";
import cookieParser from "cookie-parser"; //used to parse the cookie and get the object
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";

const JWT_SECRET = "test_456";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173" //there is only a single frontend from where cookie will be set
}));



