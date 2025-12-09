import { db } from '../config/database';

export const createUserInDB = async (data: {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: string;
}) => {
  const { name, email, password, phone, role = 'customer' } = data;
  const result = await db.query(
    `INSERT INTO users (name, email, password, phone, role)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, name, email, phone, role`,
    [name, email, password, phone, role]
  );
  return result.rows[0];
};
