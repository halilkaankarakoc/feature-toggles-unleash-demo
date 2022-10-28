export interface Todo {
  id: string;
  name: string;
  description: string;
  status: TodoStatus;
  dueDate: string;
}

export enum TodoStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
