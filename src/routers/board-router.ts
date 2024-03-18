import express from 'express';
import {
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard,
  getBoardByName,
} from 'src/controllers';

export const boardRouter = express.Router();

boardRouter.post('/', createBoard);
boardRouter.get('/id/:id', getBoardById);
boardRouter.get('/name/:name', getBoardByName);
boardRouter.put('/:id', updateBoard);
boardRouter.delete('/:id', deleteBoard);
