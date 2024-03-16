import { Schema } from 'mongoose';
import { ColumnSchema } from './column-schema';

const defaultColumns = [
  { name: 'ToDo', tasks: [] },
  { name: 'In Progress', tasks: [] },
  { name: 'Done', tasks: [] },
];

export const BoardSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  columns: { type: ColumnSchema, required: true, default: defaultColumns },
});
