//make our code more readable and error free.
//it is a naming system that groups related values together
//doesn't exist in javascript

import express, { Request, Response } from 'express'; // replace require with import syntax, which is more compatible with TypeScript.
//req and res add better readability.
const app = express();

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/", (req: Request, res: Response) => {
    if (!req.query.userId) {
        res.status(ResponseStatus.Error).json({ message: "User ID is required." });
        return;
    }

    // logic here
    res.status(ResponseStatus.Success).json({ message: "Request was successful!" });
});

app.get("/123", (req: Request, res: Response) => {
    if(!req.query.userId) {
        res.status(ResponseStatus.Success).json({message: "User ID is requires"});
        return;
    }

    res.status(ResponseStatus.Error).json({ message: "Request was successful!"})
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
