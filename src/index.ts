import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import messageRoutes from './routes/message';

dotenv.config();
connectDB(); // Připojení k databázi

const app = express();
const PORT = process.env.PORT || 5000;

// 📦 Middleware
app.use(cors());
app.use(express.json());

// 🛣️ Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// ✅ Test route
app.get('/', (req, res) => {
  res.send('QuickChat backend is running.');
});

app.use('/api/messages', messageRoutes);

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

