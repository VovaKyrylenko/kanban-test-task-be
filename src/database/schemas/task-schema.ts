import { Schema } from 'mongoose';

export const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
