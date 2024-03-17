export interface ITask extends Document {
  _id: string;
  title: string;
  description: string;
  status: 'ToDo' | 'In Progress' | 'Done';
}

export interface IBoard extends Document {
  _id: string;
  name: string;
  tasks: ITask[];
}
