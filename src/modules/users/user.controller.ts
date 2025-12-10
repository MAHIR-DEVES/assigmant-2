import { Request, Response } from 'express';
import {
  createUser,
  listUsers,
  getUser,
  updateUser,
  removeUser,
} from './user.service';

// create user
export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone, role } = req.body;
    const user = await createUser({ name, email, password, phone, role });
    return res.status(201).json({ success: true, data: user });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// all users
export const getUsersHandler = async (req: Request, res: Response) => {
  const users = await listUsers();
  res.json({ success: true, data: users });
};

// single user
export const getUserHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.userId);
  if (req.user?.role !== 'admin' && req.user?.id !== id)
    return res.status(403).json({ success: false, message: 'Forbidden' });
  const user = await getUser(id);
  if (!user)
    return res.status(404).json({ success: false, message: 'User not found' });
  res.json({ success: true, data: user });
};

// update user
export const updateUserHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.userId);
  if (req.user?.role !== 'admin' && req.user?.id !== id)
    return res.status(403).json({ success: false, message: 'Forbidden' });
  const user = await updateUser(id, req.body);
  res.json({ success: true, data: user });
};

// delete user
export const deleteUserHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.userId);
  if (req.user?.role !== 'admin')
    return res.status(403).json({ success: false, message: 'Forbidden' });
  await removeUser(id);
  res.json({ success: true, message: 'User deleted' });
};
