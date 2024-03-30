import express from 'express';
import {
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard,
} from 'src/controllers';

export const boardRouter = express.Router();

boardRouter.post('/', createBoard);
boardRouter.get('/:id', getBoard);
boardRouter.put('/:id', updateBoard);
boardRouter.delete('/:id', deleteBoard);
