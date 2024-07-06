import { Task, TaskStatus } from "@/app/api/tasks/domain/task.entity";

export default async function ({
  status,
  id,
}: {
  status: TaskStatus;
  id: string;
}) {
  const result = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "put",
    body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result.json() as Promise<Task>;
}
