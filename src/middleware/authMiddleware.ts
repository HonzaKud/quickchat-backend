import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { IUser } from '../models/User';

interface AuthRequest extends Request {
  user?: IUser;
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

      const user = await User.findById(decoded.id).select('-password');
      if (!user) {
        res.status(401).json({ message: 'Uživatel nenalezen' });
        return;
      }

      req.user = user;
      next();
    } catch (error) {
      console.error('Chyba při ověřování tokenu:', error);
      res.status(401).json({ message: 'Neplatný token' });
    }
  } else {
    res.status(401).json({ message: 'Token chybí' });
  }
};
