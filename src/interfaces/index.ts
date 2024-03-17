export interface ITask extends Document {
  _id: string;
  title: string;
  description: string;
}

export interface IBoard extends Document {
  _id: string;
  name: string;
  tasks: ITask[];
}
