"use server"

import { revalidatePath } from "next/cache";
import { createTodo, updateTodo } from "./todoService";

export async function handleUpdateTodo(totoId: string, formData: FormData) {
    const title = formData.get('title') as string;

    if (!title) {
        return
    }

    const res = await updateTodo(totoId, {
        title: title,
        status: "todo",
    })

    revalidatePath('/')

    return;
}

export async function handleCreateTodo(formData: FormData) {

    const title = formData.get('title') as string;

    if (!title) {
      return
    }

    const res = await createTodo({
      title: title,
      status: "todo",
    })

    console.log(res)

    revalidatePath('/')

    return;

  }

