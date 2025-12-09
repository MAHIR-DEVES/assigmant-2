import { Pool } from 'pg';
import { config } from 'dotenv';
import { ENV } from './environment';

config();

export const db = new Pool({
  connectionString: ENV.DATABASE_URL,
});
