import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './TodoService';
import { Todo } from './common/Todo';

@Controller('/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get('/:id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }

  @Post()
  saveTodo(@Body() todo: Todo) {
    return this.todoService.saveTodo(todo);
  }

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }
}
