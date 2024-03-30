import { BoardModel } from 'src/database';

export const boardService = {
  createBoard: async (name: string) => {
    return await BoardModel.create({ name });
  },

  getBoardById: async (id: string) => {
    return await BoardModel.findById(id);
  },

  updateBoard: async (id: string, name: string) => {
    return await BoardModel.findByIdAndUpdate(id, { name }, { new: true });
  },

  deleteBoard: async (id: string) => {
    return await BoardModel.findByIdAndDelete(id);
  },
};
