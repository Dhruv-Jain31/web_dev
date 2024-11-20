import { Client } from 'pg';

async function insertData() {
    const client = new Client({
        host: "localhost",
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });
//The pg library's query method only supports executing one SQL query at a time.
//right way to give values

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
        // all the user provided strings are not put as it is in the query as such.
        // they are given as values separately. if they are put into sql query then
        // user can run another sql query inside that field and can run that easily.

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
