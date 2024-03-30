import express from 'express';
import {
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  getTasksByColumn,
} from 'src/controllers';

export const taskRouter = express.Router({ mergeParams: true });

taskRouter.post('/:column', createTask);
taskRouter.put('/:taskId', updateTask);
taskRouter.delete('/:taskId', deleteTask);
taskRouter.get('/:taskId', getTaskById);
taskRouter.get('/column/:columnId', getTasksByColumn);
