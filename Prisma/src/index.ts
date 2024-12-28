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

async function insert_todos(title:string, userId: number, description: string) {
    // adding a new todo
    const newTodo = await prisma.todo.create({
        data: {
            title,
            userId,
            description
        }
    });
    console.log("New todo:" , newTodo);

}

async function getTodos(userId: number,) {
    const todos = await prisma.todo.findMany({
        where: {
        userId: userId,
        },
    });
    console.log(todos);
}

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

//insertUser("dhruv","dhruv31@gmail.com", "dhruv_32121", "Dhruv", "Jain");
//insert_todos("Learn Postgres", 2, "Learn Postgres");
//getTodos(2)
getTodosAndUserDetails(2);

//updateUser("dhruv33@gmail.com",{
//    firstname: "Dhruv20",
//    lastname: "Kapoor"
//}) // this function expects 1st argument as string and second as object