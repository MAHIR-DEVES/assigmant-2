import { Router } from 'express';
import { createUserHandler } from './user.controller';

const router = Router();

// POST /api/v1/users → create user
router.post('/', createUserHandler);

export default router;
