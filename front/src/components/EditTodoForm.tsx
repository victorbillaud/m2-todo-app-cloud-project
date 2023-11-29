"use client"

import { handleUpdateTodo } from "@/lib/action";
import { Todo } from "@/lib/types";
import { useRef } from "react";

export default function EditTodoForm({
  todo,
}: {
  todo: Todo
}) {
  const handleSubmitWithTodoId = handleUpdateTodo.bind(null, todo.id)
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form action={handleSubmitWithTodoId} onSubmit={() => {
      formRef.current?.reset();
    }}
      className="TodoForm"
      ref={formRef}
    >
      <input type="text" name='title' className="todo-input" placeholder='What is the task today?' />
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}
