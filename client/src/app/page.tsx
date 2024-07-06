import getTasks from "./api/tasks/usecases/get-tasks";
import Form from "./components/form/form.component";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description} - Criada em{" "}
            {new Date(task.createdAt).toUTCString()}
          </li>
        ))}
      </ul>
      <Form />
    </main>
  );
}
