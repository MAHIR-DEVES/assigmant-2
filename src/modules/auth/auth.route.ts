import { Router } from 'express';
import { loginHandler } from './auth.controller';

const router = Router();

// POST /api/v1/auth/signin → login
router.post('/signin', loginHandler);

export default router;
