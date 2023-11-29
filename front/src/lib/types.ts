export type Todo = {
    id: string,
    title: string,
    status: "todo" | "done" | "inProgress"
}

export type TodoInsert = {
    title: string,
    status: "todo" | "done" | "inProgress"
}

export type TodoUpdate = {
    title?: string,
    status?: "todo" | "done" | "inProgress"
}