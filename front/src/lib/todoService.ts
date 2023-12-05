import { Todo, TodoInsert, TodoUpdate } from "./types";

const url = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'; 

export const createTodo = async (todoData: TodoInsert): Promise<Todo[]> => {
    const response = await fetch(`${url}/todo`, {
        method: 'POST',
        body: JSON.stringify(todoData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}

export const deleteTodo = async (todoId: Todo["id"]): Promise<Todo[]> => {
    const response = await fetch(`${url}/todo`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: todoId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete todo');
    }

    return response.json();
}

export const listTodos = async (): Promise<Todo[]> => {
    const response = await fetch(`${url}/todo`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }

    return response.json();
}

export const updateTodo = async (todoId: Todo["id"], todoData: TodoUpdate): Promise<Todo[]> => {
    const response = await fetch(`${url}/todo`, {
        method: 'PUT',
        body: JSON.stringify({
            id: todoId,
            ...todoData
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}
