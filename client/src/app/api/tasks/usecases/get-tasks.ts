import { Task } from "@/app/api/tasks/domain/task.entity";

export default async function () {
  const result = await fetch("http://localhost:3000/tasks", {
    method: "get",
    cache: "no-cache",
  });

  return result.json() as Promise<Task[]>;
}
