import { Client } from 'pg';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function askQuestion(query:string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query,(answer)=>{
            resolve(answer);
        });
    });
}

async function insert_Data_Address_Table(){
    const client = new Client({
        host: "localhost",
        port: 5432,
        database: "postgres",
        user: "postgres",
        password: "mysecretpassword",
    });

    try{
        await client.connect();
        console.log("connected to postgres")

        const user_id_1 = parseInt(await askQuestion("Enter user_id for user: "),10);
        const city_1 = await askQuestion("Enter City: ");
        const country_1 = await askQuestion("Enter Country: ");
        const street_1 = await askQuestion("Enter Street: ");
        const pincode_1 = parseInt(await askQuestion("Enter Pincode: "),6);

        const user_id_2 = parseInt(await askQuestion("Enter user_id for user: "),10);
        const city_2 = await askQuestion("Enter City: ");
        const country_2 = await askQuestion("Enter Country: ");
        const street_2 = await askQuestion("Enter Street: ");
        const pincode_2 = parseInt(await askQuestion("Enter Pincode: "),6);

        const insert_query = `INSERT INTO addresses(user_id,city,country,street,pincode)
                              VALUES
                              ($1,$2,$3,$4,$5),
                              ($6,$7,$8,$9,$10);`;

        const values = [user_id_1,city_1,country_1,street_1,pincode_1,
                        user_id_2,city_2, country_2,street_2,pincode_2];

        const res = await client.query(insert_query, values);

        console.log("Insertion success:", res.rowCount, "row(s) inserted.")
    } catch(err){
        console.log("Error during Database Operation: ", err);
    } finally{
        rl.close();
        await client.end();
        console.log("Disconnected from Postgres");
    }
}

insert_Data_Address_Table();