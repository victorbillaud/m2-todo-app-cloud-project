'use client'

import { handleCreateTodo } from "@/lib/action";
import { useRef } from "react";

export default function TodoForm() {

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} action={handleCreateTodo} className="TodoForm" >
      <input type="text" name='title' className="todo-input" placeholder='What is the task today?' />
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}
