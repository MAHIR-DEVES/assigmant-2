import bcrypt from 'bcrypt';
import { createUserInDB } from '../../repositories/user.repository';

export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: string;
}) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return createUserInDB({ ...data, password: hashedPassword });
};
