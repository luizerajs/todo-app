import { Request, Response, Router } from "express";

import { InputTaskDTO } from "../../../domain/task/task.interface";
import { TaskRepository } from "../../../domain/task";
import { TaskStatus } from "@/domain/task/task.entity";

const taskRoutes = Router();

taskRoutes.get("/", async (_req: Request, res: Response) => {
  const tasks = await TaskRepository.getTasks();

  return res.status(200).json(tasks);
});

taskRoutes.post("/", async (req: Request, res: Response) => {
  const { description } = req.body as InputTaskDTO;

  console.log(req.body);

  if (!description) {
    return res
      .status(400)
      .json({ status: 400, message: "Description is missing!" });
  }

  const output = await TaskRepository.createTask({ description });
  return res.status(200).json(output);
});

taskRoutes.put("/:taskId", async (req: Request, res: Response) => {
  const { taskId } = req.params as { taskId: string };
  const { description, status } = req.body as InputTaskDTO;

  if (!taskId) {
    return res
      .status(400)
      .json({ status: 400, message: "ID task is missing!" });
  }

  const output = await TaskRepository.updateTask(taskId, description, status);

  if (!output) {
    return res
      .status(404)
      .json({ status: 404, message: "Task was not Found!" });
  }

  return res.status(200).json(output);
});

taskRoutes.delete("/:taskId", async (req: Request, res: Response) => {
  const { taskId } = req.params as { taskId: string };

  if (!taskId) {
    return res
      .status(400)
      .json({ status: 400, message: "ID task is missing!" });
  }

  const output = await TaskRepository.deleteTask(taskId);

  if (!output.affected) {
    return res
      .status(404)
      .json({ status: 404, message: "This Task do not exist!" });
  }

  return res
    .status(200)
    .json({ status: 200, message: "Task deleted successfully!" });
});

export default taskRoutes;
