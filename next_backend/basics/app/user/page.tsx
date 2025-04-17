import axios from "axios";

async function fetchData(){
    const response = await axios.get("http://localhost:3000/api/user")
         await new Promise(r => setTimeout(r, 5000));

         console.log("response is " + JSON.stringify(response.data));
         return response.data;
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