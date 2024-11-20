import { Client } from 'pg';

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

        const insert_query = `INSERT INTO users_1 (username, email, password) 
                             VALUES
                            ($1, $2, $3),
                            ($4,$5,$6);
                            `;
        const values1 = [
            'ramlal123', 'ramlal226@gmail.com', 'shamlal@123',
            'manu26', 'manu2312@yahoo.com', 'manu@1232',
        ];

        const res = await client.query(insert_query, values1);

        console.log("Insertion success:", res.rowCount, "row(s) inserted.");
    } catch (err) {
        console.log("Error during database operation:", err);
    } finally {
        await client.end();
        console.log("Disconnected from PostgreSQL");
    }
}

insertData();
