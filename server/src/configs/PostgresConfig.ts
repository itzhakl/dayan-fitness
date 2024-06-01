import Pool from 'pg-pool';
import { config } from 'dotenv';
import fs from 'fs';

config();

const CaCert = () => {
  const caCertPath = process.env.PG_SSL_CA_PATH;
  if (caCertPath) {
    return fs.readFileSync(caCertPath).toString();
  } else {
    throw new Error('PG_SSL_CA_PATH is not defined in the environment variables');
  }
}

const databaseConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT || '5432', 10),
  database: process.env.PG_DATABASE,
  ssl: {
      rejectUnauthorized: true,
      ca: process.env.PG_SSL_CA,
  },
  max: 20, // מספר החיבורים המרבי בערימה
  idleTimeoutMillis: 30000, // זמן חיבור למסד הנתונים במילישניות כאשר אין שימוש
  connectionTimeoutMillis: 2000, // זמן המתנה מרבי עבור חיבור חדש (מילישניות)
};

export const connectAndQuery = async () => {
  try {
    const res = await executeQuery("SELECT VERSION()");
    console.log(res[0].version);
  } catch (err) {
    console.error(err);
  }
}

export const executeQuery = async (query: string, params: any[] = []) => {
  // const pool = new Pool({Client: Client, ...databaseConfig});
  const pool = new Pool(databaseConfig);
  try {
    const result = await pool.query(query, params);
    return result.rows;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error executing query: ${error.message}`);
    } else {
      throw new Error(`Unknown Error executing query: ${error}`);
    }
  }
}
