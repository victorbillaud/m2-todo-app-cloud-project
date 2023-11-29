import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async createTodo(@Body() todoData: Prisma.TodoCreateInput): Promise<Todo> {
    return this.todoService.createTodo(todoData);
  }

  @Delete()
  async deleteTodo(
    @Body() todoData: Prisma.TodoWhereUniqueInput,
  ): Promise<Todo> {
    return this.todoService.deleteTodo({
      id: todoData.id,
    });
  }

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.todoService.todos({});
  }

  @Get(':id')
  async getTodoById(id: string): Promise<Todo> {
    return this.todoService.todo({
      id: id,
    });
  }
}
