"use client";

import { useQuery } from "@tanstack/react-query";
import getTasks from "./api/tasks/usecases/get-tasks";
import { CardList } from "./components/card";

export default function Home() {
  const { data: tasks } = useQuery({ queryKey: ["tasks"], queryFn: getTasks });

  if (!tasks) return;

  return (
    <main className="flex items-center justify-center w-screen h-screen font-medium">
      <CardList tasks={tasks} />
    </main>
  );
}
