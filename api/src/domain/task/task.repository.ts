import { AppDataSource } from "@/infra/database/data-source";
import { InputTaskDTO, OutputTaskDTO } from ".";
import { Task, TaskStatus } from "./task.entity";

console.log(AppDataSource);

const TaskRepository = AppDataSource.getRepository(Task);

const getTasks = async (): Promise<OutputTaskDTO[]> => {
  return await TaskRepository.find({
    order: { createdAt: { direction: "DESC" } },
    where: { status: TaskStatus.TODO },
  });
};

const getTask = (taskId: string): Promise<OutputTaskDTO | null> => {
  return TaskRepository.findOne({ where: { id: taskId } });
};

const createTask = (task: InputTaskDTO): Promise<OutputTaskDTO> => {
  return TaskRepository.save(task);
};

const updateTask = async (
  taskId: string,
  description?: string,
  status?: TaskStatus
): Promise<OutputTaskDTO | null> => {
  const task = await TaskRepository.findOne({ where: { id: taskId } });

  if (!task) {
    return null;
  }

  if (description) {
    task.description = description;
  }

  if (status) {
    task.status = status;
  }

  return TaskRepository.save(task);
};

const deleteTask = async (taskId: string | string[]) => {
  return TaskRepository.delete(taskId);
};

export default { getTasks, createTask, getTask, updateTask, deleteTask };
