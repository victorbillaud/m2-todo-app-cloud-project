import { listTodos } from "@/lib/todoService";
import { TodoComponent } from "./Todo";
import TodoForm from "./TodoForm";


export async function TodoWrapper() {
  const todos = await listTodos();
  
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm />
      {todos.map((todo) =>
        <TodoComponent
          key={todo.id}
          task={todo}
        />
      )}
    </div>
  );
};