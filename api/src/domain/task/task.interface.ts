export interface InputTaskDTO {
  description?: string;
}

export interface OutputTaskDTO {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
