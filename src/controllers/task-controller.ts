import { taskService } from 'src/services/';
import { Request, Response } from 'express';

/**
 * Controller function to create a new task in a board.
 * @param req Express Request object
 * @param res Express Response object
 */
export const createTask = async (req: Request, res: Response) => {
  const { column } = req.params;
  try {
    const { title, description, position } = req.body;
    if (!title || !description || !position) {
      return res.status(400).json({
        message: 'Title, description and position are required',
      });
    }
    const newTask = await taskService.createTask(
      title,
      description,
      column,
      position,
    );

    res.status(201).json(newTask);
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
    const { title, description, column, position } = req.body;
    if (!title && !description && !column && !position) {
      return res.status(400).json({
        message:
          'At least one field (title, description, column, position) must be provided',
      });
    }
    const updatedTask = await taskService.updateTask(
      taskId,
      title,
      description,
      column,
      position,
    );

    res.json(updatedTask);
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
    await taskService.deleteTask(taskId);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controller function to get a task by its ID.
 * @param req Express Request object
 * @param res Express Response object
 */
export const getTaskById = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  try {
    const task = await taskService.getTaskById(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controller function to get tasks by column.
 * @param req Express Request object
 * @param res Express Response object
 */
export const getTasksByColumn = async (req: Request, res: Response) => {
  const { columnId } = req.params;
  try {
    const tasks = await taskService.getTasksByColumn(columnId);
    if (!tasks) {
      return res
        .status(404)
        .json({ message: 'Tasks not found for this column' });
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
