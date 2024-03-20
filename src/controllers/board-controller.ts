import { Request, Response } from 'express';
import { BoardModel } from 'src/database/';

/**
 * Controller function to create a new board.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 */
export const createBoard = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newBoard = await BoardModel.create({ name });
    res.status(201).json(newBoard);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      return res
        .status(400)
        .json({ message: 'A board with this name already exists' });
    }
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controller function to get a board by its ID.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 */
export const getBoardById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const board = await BoardModel.findById(id);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controller function to update a board by its ID.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 */
export const updateBoard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedBoard = await BoardModel.findByIdAndUpdate(
      id,
      { name },
      { new: true },
    );
    if (!updatedBoard) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json(updatedBoard);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      return res
        .status(400)
        .json({ message: 'A board with this name already exists' });
    }
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controller function to delete a board by its ID.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 */
export const deleteBoard = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedBoard = await BoardModel.findByIdAndDelete(id);
    if (!deletedBoard) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json({ message: 'Board deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
