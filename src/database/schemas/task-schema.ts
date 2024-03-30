import { Schema } from 'mongoose';

export const TaskSchema: Schema = new Schema({
  column: {
    type: Schema.Types.ObjectId,
    ref: 'Column',
  },
  title: String,
  description: String,
  position: Number,
});
