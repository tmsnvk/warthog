import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const PG_USERNAME = process.env.PG_USERNAME;
const PG_PASSWORD = process.env.PG_PASSWORD;
const PG_HOST = process.env.PG_HOST;
const PG_DATABASE = process.env.PG_DATABASE;
const PG_PORT = process.env.PG_PORT;

const pool = new Pool({
  user: PG_USERNAME,
  password: PG_PASSWORD,
  host: PG_HOST,
  database: PG_DATABASE,
  port: Number(PG_PORT),
});

export default pool;
