import express from 'express';
// import boardRoutes from './routes/boardRoutes';
import connectDB from './database/database';

const app = express();
const PORT = 6666;

app.use(express.json());
connectDB();
// app.use('/api', boardRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
