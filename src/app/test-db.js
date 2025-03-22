const { Pool } = require('pg');

// Create a new Pool instance using environment variables
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

// Test the connection
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Connected to the database!');

    // Run a simple query
    const res = await client.query('SELECT NOW()');
    console.log('Current time:', res.rows[0].now);

    // Release the client back to the pool
    client.release();
  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    // Close the pool
    await pool.end();
  }
}

testConnection();