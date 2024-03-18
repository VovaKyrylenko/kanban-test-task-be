import { Request, Response } from 'express';
import { BoardModel } from 'src/database/';

/**
 * Controller function to create a new task in a board.
 * @param req Express Request object
 * @param res Express Response object
 */
export const createTask = async (req: Request, res: Response) => {
  const { boardId } = req.params;

  try {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
      return res
        .status(400)
        .json({ message: 'Title, description, and status are required' });
    }

    if (!['TODO', 'IN PROGRESS', 'DONE'].includes(status)) {
      return res.status(400).json({
        message: 'Invalid status. Valid statuses are: TODO, IN PROGRESS, DONE',
      });
    }

    const updatedBoard = await BoardModel.findByIdAndUpdate(
      boardId,
      {
        $push: { tasks: { title, description, status } },
      },
      { new: true },
    );

    if (!updatedBoard) {
      return res.status(404).json({ message: 'Board not found' });
    }

    res.status(201).json(updatedBoard.tasks.slice(-1)[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controller function to update a task.
 * @param req Express Request object
 * @param res Express Response object
 */
export const updateTask = async (req: Request, res: Response) => {
  const { taskId } = req.params;

  try {
    const { title, description, status } = req.body;

    if (!title && !description && !status) {
      return res.status(400).json({
        message:
          'At least one field (title, description, status) must be provided',
      });
    }

    if (status && !['TODO', 'IN PROGRESS', 'DONE'].includes(status)) {
      return res.status(400).json({
        message: 'Invalid status. Valid statuses are: TODO, IN PROGRESS, DONE',
      });
    }

    const updatedTask = await BoardModel.findOneAndUpdate(
      { 'tasks._id': taskId },
      {
        $set: {
          'tasks.$.title': title,
          'tasks.$.description': description,
          'tasks.$.status': status,
        },
      },
      { new: true, projection: { tasks: { $elemMatch: { _id: taskId } } } },
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask.tasks[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controller function to delete a task.
 * @param req Express Request object
 * @param res Express Response object
 */
export const deleteTask = async (req: Request, res: Response) => {
  const { taskId } = req.params;

  try {
    const updatedBoard = await BoardModel.findOneAndUpdate(
      { 'tasks._id': taskId },
      { $pull: { tasks: { _id: taskId } } },
      { new: true },
    );

    if (!updatedBoard) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
