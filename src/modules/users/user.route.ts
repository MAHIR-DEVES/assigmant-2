import { Router } from 'express';
import {
  getUsersHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from './user.controller';
import { authenticate, authorize } from '../../middlewares/auth.middleware';

const router = Router();

router.get('/', authenticate, authorize('admin'), getUsersHandler);
router.get(
  '/:userId',
  authenticate,
  authorize('admin', 'customer'),
  getUserHandler
);
router.put(
  '/:userId',
  authenticate,
  authorize('admin', 'customer'),
  updateUserHandler
);
router.delete('/:userId', authenticate, authorize('admin'), deleteUserHandler);

export default router;
