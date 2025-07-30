import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

app.post("/submit", async(req,res) => {
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;

    //pushing it to redis

    try{
        await client.lPush("problems", JSON.stringify({ code, language, problemId }));
        // Store in the database
        res.status(200).send("Submission received and stored.");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }
})


//we wait for the redis client to be connected and then listen it in a port
async function startServer(){
    try{
        await client.connect();
        console.log("Connected to redis");

        app.listen(3000, () => {
            console.log("server is running on port 3000");
        });
    }
    catch(error){
        console.error("Failed to connect to redis", error);
    }
}

startServer();