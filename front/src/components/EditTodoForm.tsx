"use client"

import { useState } from "react";
import { Todo } from "./TodoWrapper";

export const EditTodoForm = ({ editTodo, task }: { editTodo: (task: string, id: string) => void, task: Todo }) => {
  const [value, setValue] = useState<string>(task.task);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm" >
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
      <button type="submit" className='todo-btn' >Add Task</button>
    </form>
  )
}