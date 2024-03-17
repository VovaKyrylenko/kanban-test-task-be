import { ITask } from 'src/interfaces';
import mongoose from 'mongoose';
import { TaskSchema } from '../schemas';

export const TaskModel = mongoose.model<ITask>('Task', TaskSchema);
