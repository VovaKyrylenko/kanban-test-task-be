import { IBoard } from '@/interfaces';
import mongoose from 'mongoose';
import { BoardSchema } from '../schemas/board-schema';

export const BoardModel = mongoose.model<IBoard>('Board', BoardSchema);
