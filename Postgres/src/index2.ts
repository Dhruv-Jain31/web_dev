import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres",
});

async function create_address_table(){
    try{
        await client.connect();
        console.log("connected to the postgres");

        const make_query = `CREATE TABLE IF NOT EXISTS addresses(
                              id SERIAL PRIMARY KEY,
                              user_id INTEGER NOT NULL,
                              city VARCHAR(20) NOT NULL,
                              country VARCHAR(100) NOT NULL,
                              street VARCHAR(255) NOT NULL,
                              pincode VARCHAR(20),
                              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                              FOREIGN KEY (user_id) REFERENCES users_2(id) ON DELETE CASCADE
                              )`; //on delete cascade means that when we delete any field from users table
                              // corresponding field mapped to the address table gets deleted automatically
        const res = await client.query(make_query);
        console.log("address table created successfully:",res.command);
    }
    catch (error){
        console.error("error creating the table ",error);
    }
    finally{
        await client.end();
        console.log("Disconnected from postgres");
    }
}

create_address_table();
