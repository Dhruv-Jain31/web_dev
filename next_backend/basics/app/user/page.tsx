import axios from "axios";
import client from "@/db";

async function fetchData(){
         await new Promise(r => setTimeout(r, 5000));

         const user = await client.user.findFirst()

    return({
        username: user?.username,
        password: user?.password,
    })
} //does the db call directly. this function will never reach the frontend as it is loaded in server

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