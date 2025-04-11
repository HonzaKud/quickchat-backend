import express, { Request, Response } from 'express';
import { protect } from '../middleware/authMiddleware';
import { IUser } from '../models/User';

const router = express.Router();

interface AuthRequest extends Request {
  user?: IUser;
}

router.get('/me', protect, (req: AuthRequest, res: Response) => {
  res.status(200).json({
    message: 'Přihlášený uživatel',
    user: req.user,
  });
});

export default router;
