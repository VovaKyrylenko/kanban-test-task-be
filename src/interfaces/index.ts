import { Schema } from 'mongoose';

export interface IBoard extends Document {
  name: string;
}

export interface IColumn extends Document {
  board: Schema.Types.ObjectId;
  name: TaskStatusType;
}

export interface ITask extends Document {
  column: Schema.Types.ObjectId;
  title: string;
  description: string;
  position: number;
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN PROGRESS',
  DONE = 'DONE',
}

export type TaskStatusType = keyof typeof TaskStatus;
