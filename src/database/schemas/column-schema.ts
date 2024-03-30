import { Schema } from 'mongoose';

export const ColumnSchema: Schema = new Schema({
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
  },
  name: String,
});
