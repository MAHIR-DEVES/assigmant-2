import express from 'express';
import cors from 'cors';
import userRoutes from './modules/users/user.route';
import authRoutes from './modules/auth/auth.route';

const app = express();

app.use(express.json());
app.use(cors());

// auth
app.use('/api/v1/auth', authRoutes);

// Mount users route
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Vehicle Rental API Running...');
});

export default app;
