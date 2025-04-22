import express, { Request, Response } from "express";
import { BACKEND_URL } from "@repo/common/config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello world",
    "url": BACKEND_URL,
  });
});

app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});
