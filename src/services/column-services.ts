import { TaskStatus } from 'src/interfaces';
import { ColumnModel } from 'src/database';

export const columnService = {
  createColumn: async (boardId: string, name: string) => {
    return await ColumnModel.create({
      board: boardId,
      name: name,
    });
  },

  createDefaultColumns: async (boardId: string) => {
    const defaultColumns = Object.values(TaskStatus);
    for (const columnName of defaultColumns) {
      await columnService.createColumn(boardId, columnName);
    }
  },

  deleteColumnsByBoardId: async (boardId: string) => {
    await ColumnModel.deleteMany({ board: boardId });
  },

  getColumnsByBoardId: async (boardId: string) => {
    return await ColumnModel.find({ board: boardId });
  },
};
