import { Schema } from 'mongoose';
import { TaskSchema } from './task-schema';

export const BoardSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  tasks: { type: [TaskSchema], required: true, default: [] },
});
