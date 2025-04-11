import { Request, Response } from 'express';
import User from '../models/User';

// Vrátí seznam všech uživatelů (bez hesla)
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Chyba při načítání uživatelů.' });
  }
};
