import { Client } from 'pg';

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres",
});

async function createUsersTable() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL");

    const result = await client.query(`
      CREATE TABLE IF NOT EXISTS users_2 (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Table 'users1' created successfully:", result.command);
  } catch (error) {
    console.error("Error creating table:", error);
  } finally {
    await client.end();
    console.log("Disconnected from PostgreSQL");
  }
}

createUsersTable();
