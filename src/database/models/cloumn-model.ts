import mongoose from 'mongoose';
import { IColumn } from 'src/interfaces';
import { ColumnSchema } from '../schemas';

export const ColumnModel = mongoose.model<IColumn>('Column', ColumnSchema);
