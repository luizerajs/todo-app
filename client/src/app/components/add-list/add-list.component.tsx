"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import postTasks from "@/app/api/tasks/usecases/post-tasks";

export default function AddList() {
  const queryClient = useQueryClient();
  const [description, setDescription] = useState("");

  const mutation = useMutation({
    mutationKey: ["post/tasks"],
    mutationFn: postTasks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== "Enter") return;

    event.preventDefault();
    mutation.mutate({ description });
    setDescription("");
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded"
      >
        <svg
          className="w-5 h-5 text-gray-400 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <input
          className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
          type="text"
          value={description}
          placeholder="add a new task"
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </button>
    </div>
  );
}
