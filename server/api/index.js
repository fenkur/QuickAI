import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from '../routes/aiRoutes.js';
import connectCloudinary from '../configs/cloudinary.js';
import userRouter from '../routes/userRoutes.js';

const app = express();

let initialized = false;
const initialize = async () => {
  if (!initialized) {
    await connectCloudinary();
    initialized = true;
  }
};

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use(async (req, res, next) => {
  await initialize();
  next();
});

app.get('/', (req, res) => res.send('Server is Live!'));
app.use(requireAuth());

app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);

export default app;