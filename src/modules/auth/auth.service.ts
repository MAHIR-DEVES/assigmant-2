import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ENV } from '../../config/environment';
import { getUserByEmail } from '../../repositories/auth.repository';

export const loginUser = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, role: user.role, email: user.email },
    ENV.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return {
    token,
  };
};
