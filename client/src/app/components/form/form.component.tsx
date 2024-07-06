"use client";

import { useState } from "react";
import useSWRMutation from "swr/mutation";

import postTasks from "@/app/api/tasks/usecases/post.tasks";

const Form = () => {
  const [description, setDescription] = useState("");

  const { trigger } = useSWRMutation("/post/task", () =>
    postTasks({ description })
  );

  return (
    <div>
      <input
        value={description}
        type="text"
        name="description"
        placeholder="adicionar tarefa"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="button" onClick={() => trigger()}>
        Cadastrar
      </button>
    </div>
  );
};

export default Form;
