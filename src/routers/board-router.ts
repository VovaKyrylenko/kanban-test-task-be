import express from 'express';
import {
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard,
} from 'src/controllers';

export const boardRouter = express.Router();

boardRouter.post('/', createBoard);
boardRouter.get('//:id', getBoardById);
boardRouter.put('/:id', updateBoard);
boardRouter.delete('/:id', deleteBoard);
