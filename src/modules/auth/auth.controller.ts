import { Request, Response } from 'express';
import { loginUser } from './auth.service';

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await loginUser(email, password);
    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    return res.status(401).json({ success: false, message: error.message });
  }
};
