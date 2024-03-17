import { Schema } from 'mongoose';

export const TaskSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['ToDo', 'In Progress', 'Done'],
  },
});
