import axios from "axios";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

async function fetchData(){
         await new Promise(r => setTimeout(r, 5000));

         const user = await client.user.findFirst()

    return({
        username: user?.username,
        password: user?.password,
    })
}

export default async function User() {
    const data = await fetchData();

    return (
        <div>
            <div>
            {data.username}
            </div>
            {data.password}
        </div>
    );
}