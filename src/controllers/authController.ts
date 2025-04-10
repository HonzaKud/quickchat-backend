import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import { hashPassword, comparePasswords, generateToken } from '../services/authService';
import { IUser } from '../models/User'; // nahoře v souboru


// Registrace uživatele
export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Uživatel s tímto emailem již existuje.' });
      return;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'Registrace proběhla úspěšně.' });
  } catch (error) {
    console.error('Chyba při registraci:', error);
    res.status(500).json({ message: 'Chyba serveru.' });
  }
};

// Přihlášení uživatele
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }) as IUser & { _id: string };
    if (!user) {
      res.status(400).json({ message: 'Uživatel neexistuje.' });
      return;
    }

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Špatné heslo.' });
      return;
    }

    const token = generateToken(user._id.toString());
    res.status(200).json({
      message: 'Přihlášení proběhlo úspěšně.',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Chyba při přihlášení:', error);
    res.status(500).json({ message: 'Chyba serveru.' });
  }
};
