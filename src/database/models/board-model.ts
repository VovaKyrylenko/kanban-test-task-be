import { IBoard } from 'src/interfaces';
import mongoose from 'mongoose';
import { BoardSchema } from '../schemas';

export const BoardModel = mongoose.model<IBoard>('Board', BoardSchema);
