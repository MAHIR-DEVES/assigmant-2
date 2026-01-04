import { Router } from 'express';
import { createUserHandler, loginHandler } from './auth.controller';

const router = Router();

router.post('/signup', createUserHandler); // signup / create user

// POST /api/v1/auth/signin → login
router.post('/signin', loginHandler);

export default router;
