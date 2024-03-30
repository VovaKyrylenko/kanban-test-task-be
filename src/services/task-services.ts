import { TaskModel } from 'src/database';

export const taskService = {
  createTask: async (
    title: string,
    description: string,
    column: string,
    position: number,
  ) => {
    return await TaskModel.create({
      title,
      description,
      column,
      position,
    });
  },
  updateTask: async (
    id: string,
    title: string,
    description: string,
    column: string,
    position: number,
  ) => {
    return await TaskModel.findByIdAndUpdate(
      id,
      { title, description, column, position },
      { new: true },
    );
  },
  getTaskById: async (id: string) => {
    return await TaskModel.findById(id);
  },
  getTasksByColumn: async (column: string) => {
    return await TaskModel.find({ column });
  },
  deleteTask: async (id: string) => {
    const deletedTask = await TaskModel.findByIdAndDelete(id);
    return !!deletedTask;
  },
};
