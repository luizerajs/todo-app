import { TaskStatus } from "./task.entity";

export interface InputTaskDTO {
  description?: string;
  status?: TaskStatus;
}

export interface OutputTaskDTO {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
