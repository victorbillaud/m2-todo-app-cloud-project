import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { TodoController } from './todo/todo/todo.controller';
import { TodoService } from './todo/todo/todo.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService, PrismaService],
})
export class AppModule {}
