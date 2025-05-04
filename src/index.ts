import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import connectDB from './config/db';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import messageRoutes from './routes/message';

dotenv.config();
connectDB(); // ✅ Připojení k MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// 📦 Middleware
app.use(cors());
app.use(express.json());

// 🛣️ REST API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// ✅ Testovací GET route
app.get('/', (req, res) => {
  res.send('QuickChat backend is running.');
});

// 🧩 WebSocket (Socket.IO) server
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: '*', // nebo třeba: ['https://tvuj-frontend.vercel.app']
    methods: ['GET', 'POST'],
  },
});

// 🔌 Socket.IO připojení
io.on('connection', (socket) => {
  console.log('✅ Nový klient připojen:', socket.id);

  socket.on('disconnect', () => {
    console.log('❌ Klient odpojen:', socket.id);
  });
});

// 📢 Sdílej io instanci, pokud bude potřeba jinde
export { io };

// 🚀 Start serveru
httpServer.listen(PORT, () => {
  console.log(`🚀 Server běží na portu ${PORT}`);
});
