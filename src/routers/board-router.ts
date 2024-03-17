import express from 'express';
import {
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard,
} from '@/controllers';

export const boardRouter = express.Router();

boardRouter.post('/', createBoard);
boardRouter.get('/:id', getBoardById);
boardRouter.put('/:id', updateBoard);
boardRouter.delete('/:id', deleteBoard);
