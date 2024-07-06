import { Task } from "@/app/api/tasks/domain/task.entity";

export default async function ({ description }: { description: string }) {
  const result = await fetch("http://localhost:3000/tasks", {
    method: "post",
    body: JSON.stringify({ description }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result.json() as Promise<Task>;
}
