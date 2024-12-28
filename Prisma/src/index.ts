import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // gives all the constructs to ts file to interact with the database

async function insertUser(username:string, email:string,firstname:string, lastname:string, password:string) {
    // adding a new user
    const newUser = await prisma.users.create({
        data: {
            username,
            email,
            password,
            firstname,
            lastname
        },
        select: {
            id: true,
            firstname: true,
            lastname: false
        } // this field only returns specified things as true in console.log
    });
    console.log("New user:" , newUser);
}

interface UpdateParams{
    firstname: string;
    lastname: string;
}

async function updateUser(email: string, {
    firstname,
    lastname
}: UpdateParams) {

    const update_user = await prisma.users.update({
        where: { email }, // choose which user to update
        data: {
            firstname,
            lastname
        }, // the data needed to be updated
        select: {
            id: true,
            firstname: true,
            lastname: false
        }
    });
    console.log("update user:" , update_user);
}

insertUser("dishant_25","dishant25@gmail.com", "dishant@25102002", "Dishant", "Sharma");

//updateUser("dhruv33@gmail.com",{
//    firstname: "Dhruv20",
//    lastname: "Kapoor"
//}) // this function expects 1st argument as string and second as object