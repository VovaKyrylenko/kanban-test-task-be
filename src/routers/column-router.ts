import express from 'express';
import { getColumnsByBoardId } from 'src/controllers';

export const columnRouter = express.Router({ mergeParams: true });

columnRouter.get('/:boardId', getColumnsByBoardId);
