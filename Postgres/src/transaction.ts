import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres",
});

async function insert_Users_and_Address(
    username: string,
    email: string,
    password: string,
    city: string,
    country: string,
    street: string,
    pincode: string
){
    try{
        await client.connect();
        console.log("connected to the postgres");

        //start transaction
        await client.query('BEGIN');

        //insert into users table
        const insert_query_users = `INSERT INTO users_2 (username, email, password)
                                   VALUES($1, $2, $3)
                                   RETURNING id`;
        const res = await client.query(insert_query_users,[username,email,password]);
        const userId = res.rows[0].id;

        //insert in address table
        const insert_query_address = `INSERT INTO addresses(user_id,city,country,street,pincode)
                                     VALUES($1,$2,$3,$4,$5)`;
        const res2 = await client.query(insert_query_address,[userId,city,country,street,pincode]);

        //commit
        await client.query("COMMIT");

        console.log('User and address inserted successfully');
    }
    catch(err){
        await client.query('ROLLBACK'); // Roll back the transaction on error
        console.error('Error during transaction, rolled back.', err);
        throw err;
    }
    finally{
        await client.end();
        console.log("Disconnected from postgres");
    }
}

insert_Users_and_Address(
    "Shikhar",
    "shikhar_21@gmail.com",
    "shikhar123",
    "Chandigarh",
    "India",
    "sector 21",
    "160022",
)
