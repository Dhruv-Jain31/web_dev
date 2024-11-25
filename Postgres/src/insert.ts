/*How rl.question Works
rl.question(query, callback):

The question method takes two arguments:
query: A string that is displayed to the user as a prompt (e.g., "What is your name?").
callback: A function that is automatically executed once the user provides input.
callback Argument:

This is the second argument passed to rl.question.
When the user types their input and presses Enter, the readline module passes the user’s input (a string) as an argument to the callback function.
How Does answer Work?
rl.question(query, (answer) => {...}):
Here, (answer) is the parameter of the callback function.
When the user enters some input, rl.question internally calls the callback function and passes the user’s input as the argument (answer).
So, answer is not a predefined function; it’s just a parameter that receives the user’s input string.
An Analogy
Think of it like this:

You ask a friend a question: "What is your favorite color?"
Your friend answers, "Blue."
The callback function is like saying, "When they answer, do this with their response."*/


import { Client } from 'pg';
import readline from 'readline';

// Create the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to prompt the user for input
async function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer); // Resolve the user's input
        });
    });
};

async function insertData() {
    const client = new Client({
        host: "localhost",
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect(); // Ensure client connection is established
        console.log("Connected to PostgreSQL");

        // Ask user for input
        const username1 = await askQuestion("Enter username for user 1: ");
        const email1 = await askQuestion("Enter email for user 1: ");
        const password1 = await askQuestion("Enter password for user 1: ");

        const username2 = await askQuestion("Enter username for user 2: ");
        const email2 = await askQuestion("Enter email for user 2: ");
        const password2 = await askQuestion("Enter password for user 2: ");

        const insert_query = `INSERT INTO users_2 (username, email, password) 
                             VALUES
                            ($1, $2, $3),
                            ($4, $5, $6);`;

        const values = [username1, email1, password1, username2, email2, password2];

        const res = await client.query(insert_query, values);

        console.log("Insertion success:", res.rowCount, "row(s) inserted.");
    } catch (err) {
        console.log("Error during database operation:", err);
    } finally {
        rl.close();
        await client.end();
        console.log("Disconnected from PostgreSQL");
    }
}

insertData();
