import { deleteTodo, updateTodo } from "@/lib/todoService"
import { Todo } from "@/lib/types"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { revalidatePath } from "next/cache"

async function handleDelete(todoId: string) {
  "use server"
  const res = await deleteTodo(todoId)

  if (res) {
    console.log('deleted')
    revalidatePath('/')
  }
}

async function handleUpdate(todoId: string) {
  "use server"

  const res = await updateTodo(todoId, {
    status: "done",
  })

  if (res) {
    revalidatePath('/')
  }
}

export async function TodoComponent({ task }: {
  task: Todo,
}) {

  const handleSubmitWithTodoId = handleDelete.bind(null, task.id)

  return (
    <div className="Todo">
      <p className={`${task.status == "done" ? "completed" : "incompleted"}`}>
        {task.title}
      </p>
      <form action={handleSubmitWithTodoId}>
        <button type="submit" className="flex items-center justify-center">
          <FontAwesomeIcon className="w-5 h-5" icon={faTrash} />
        </button>
      </form>
    </div>
  )
}