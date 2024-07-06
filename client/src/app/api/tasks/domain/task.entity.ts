export enum TaskStatus {
  TODO = "TODO",
  DONE = "DONE",
  DELETED = "DELETED",
}
export interface Task {
  id: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
