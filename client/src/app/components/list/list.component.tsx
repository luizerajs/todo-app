"use client";

import { Task, TaskStatus } from "@/app/api/tasks/domain/task.entity";
import updateStatusTask from "@/app/api/tasks/usecases/update-status-task";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface ListProps {
  task: Task;
}

export default function List({ task }: ListProps) {
  const queryClient = useQueryClient();
  const isChecked = task.status === TaskStatus.DONE;

  const mutation = useMutation({
    mutationKey: ["put/tasks"],
    mutationFn: updateStatusTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const onChange = (status: boolean, id: string) => {
    if (status) {
      mutation.mutate({ status: TaskStatus.DONE, id });
      return;
    }

    mutation.mutate({ status: TaskStatus.TODO, id });
  };

  return (
    <div>
      <input
        className="hidden"
        type="checkbox"
        id={task.id}
        defaultChecked={isChecked}
        onChange={(e) => onChange(e.target.checked, task.id)}
      />
      <label
        className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
        htmlFor={task.id}
      >
        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-4 text-sm">{task.description}</span>
      </label>
    </div>
  );
}
