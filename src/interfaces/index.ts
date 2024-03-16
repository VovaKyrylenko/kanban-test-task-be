export interface ITask extends Document {
  title: string;
  description: string;
}

export interface IColumn extends Document {
  name: string;
  tasks: ITask[];
}

export interface IBoard extends Document {
  name: string;
  columns: IColumn[];
}
