import express from 'express';
import cors from 'cors';
import { boardRouter, taskRouter, columnRouter } from './routers/';
import { connectDB } from './database';

const app = express();
const PORT = 6666;

app.use(express.json());
app.use(cors());

connectDB();
app.use('/api/boards', boardRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/columns', columnRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
