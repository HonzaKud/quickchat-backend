import { Request, Response } from 'express';
import Message from '../models/Message';

// Typ rozšířeného requestu s uživatelem
interface AuthRequest extends Request {
  user?: any;
}

// ✅ Odeslání zprávy
export const sendMessage = async (req: AuthRequest, res: Response): Promise<void> => {
  const { recipientId, content } = req.body;

  if (!recipientId || !content) {
    res.status(400).json({ message: 'Chybí příjemce nebo obsah zprávy.' });
    return;
  }

  try {
    const message = new Message({
      sender: req.user._id,
      recipient: recipientId,
      content,
    });

    const saved = await message.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('❌ Chyba při ukládání zprávy:', error);
    res.status(500).json({ message: 'Chyba při odesílání zprávy.' });
  }
};

// ✅ Získání zpráv
export const getMessages = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const messages = await Message.find({
      $or: [{ sender: req.user._id }, { recipient: req.user._id }],
    })
      .sort({ createdAt: -1 })
      .populate('sender', 'username email')
      .populate('recipient', 'username email');

    res.status(200).json(messages);
  } catch (error) {
    console.error('❌ Chyba při načítání zpráv:', error);
    res.status(500).json({ message: 'Chyba při načítání zpráv.' });
  }
};
