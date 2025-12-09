import { Request, Response } from 'express';
import { createUser } from './user.service';

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone, role } = req.body;
    const user = await createUser({ name, email, password, phone, role });
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
