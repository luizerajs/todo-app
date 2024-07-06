"use client";

import { Task } from "@/app/api/tasks/domain/task.entity";
import { Logo } from "@/app/components/logo";
import { ListItem } from "@/app/components/list";
import { AddList } from "@/app/components/add-list";

export interface CardProps {
  tasks: Task[];
}

export default function Card({ tasks }: CardProps) {
  return (
    <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
      <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
        <div className="flex items-center mb-6">
          <Logo />
          <h4 className="font-semibold ml-3 text-lg">Todo list</h4>
        </div>
        {tasks.map((task) => (
          <ListItem key={task.id} task={task} />
        ))}

        <AddList />
      </div>
    </div>
  );
}
