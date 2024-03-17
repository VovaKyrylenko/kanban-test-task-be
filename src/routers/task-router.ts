import express from 'express';
import { createTask, updateTask, deleteTask } from 'src/controllers';

export const taskRouter = express.Router({ mergeParams: true });

taskRouter.post('/:boardId', createTask);
taskRouter.put('/:taskId', updateTask);
taskRouter.delete('/:taskId', deleteTask);
