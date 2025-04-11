import { Request, Response, NextFunction } from 'express';
import Message from '../models/Message';
import { IMessage } from '../models/Message';

interface AuthRequest extends Request {
  user?: any; // zjednodušeně – později můžeš nahradit IUser
}

// Odeslání zprávy
export const sendMessage = async (req: AuthRequest, res: Response) => {
  const { recipient, content } = req.body;

  try {
    const message = new Message({
      sender: req.user._id,
      recipient,
      content,
    });

    const saved = await message.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Chyba při odesílání zprávy.' });
  }
};

// Získání všech zpráv pro přihlášeného uživatele
export const getMessages = async (req: AuthRequest, res: Response) => {
  try {
    const messages = await Message.find({
      $or: [{ sender: req.user._id }, { recipient: req.user._id }],
    })
      .sort({ createdAt: -1 })
      .populate('sender', 'username')
      .populate('recipient', 'username');

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Chyba při načítání zpráv.' });
  }
};
