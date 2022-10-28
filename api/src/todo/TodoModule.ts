import { Module } from '@nestjs/common';
import { TodoController } from './TodoController';
import { TodoService } from './TodoService';
import { TodoSyncDatabaseService } from './TodoSyncDatabaseService';
import { TodoAsyncDatabaseService } from './TodoAsyncDatabaseService';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService, TodoSyncDatabaseService, TodoAsyncDatabaseService],
})
export class TodoModule {}
