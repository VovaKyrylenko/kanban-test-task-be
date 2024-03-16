import { Schema } from 'mongoose';
import { TaskSchema } from './task-schema';

const validColumnNames = ['ToDo', 'In Progress', 'Done'];

export const ColumnSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    enum: validColumnNames,
  },
  tasks: [TaskSchema],
});
