import { Request, Response } from 'express';
import { boardService, columnService } from 'src/services';

/**
 * Controller function to create a new board.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 */
export const createBoard = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }
    const newBoard = await boardService.createBoard(name);
    await columnService.createDefaultColumns(newBoard._id.toString());
    return res.status(201).json(newBoard);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      return res
        .status(400)
        .json({ message: 'A board with this name already exists' });
    } else {
      return res.status(500).json({ message: error.message });
    }
  }
};

/**
 * Retrieves a board by its ID.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 */
export const getBoard = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    const board = await boardService.getBoardById(id);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    return res.json(board);
  } catch (error) {
    console.error('Error getting board:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * Updates a board by its ID.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 */
export const updateBoard = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }
    const updatedBoard = await boardService.updateBoard(id, name);
    if (!updatedBoard) {
      return res.status(404).json({ message: 'Board not found' });
    }
    return res.json(updatedBoard);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      return res
        .status(400)
        .json({ message: 'A board with this name already exists' });
    }
    return res.status(500).json({ message: error.message });
  }
};

/**
 * Controller function to delete a board by its ID.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 */
export const deleteBoard = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { id } = req.params;
  try {
    const deletedBoard = await boardService.deleteBoard(id);
    if (!deletedBoard) {
      return res.status(404).json({ message: 'Board not found' });
    }
    await columnService.deleteColumnsByBoardId(id);
    return res.json({ message: 'Board deleted' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
