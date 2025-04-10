import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePasswords = async (
  enteredPassword: string,
  storedHashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(enteredPassword, storedHashedPassword);
};

export const generateToken = (userId: string): string => {
  const secret = process.env.JWT_SECRET || 'tajnytoken';
  return jwt.sign({ id: userId }, secret, { expiresIn: '7d' });
};
