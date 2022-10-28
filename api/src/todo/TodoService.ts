import { Injectable } from '@nestjs/common';
import { TodoSyncDatabaseService } from './TodoSyncDatabaseService';
import { Todo } from './common/Todo';
import { TodoAsyncDatabaseService } from './TodoAsyncDatabaseService';
import * as unleash from 'unleash-client';

@Injectable()
export class TodoService {
  constructor(
    private readonly todoSyncDatabaseService: TodoSyncDatabaseService,
    private readonly todoAsyncDatabaseService: TodoAsyncDatabaseService,
  ) {}

  saveTodo(todo: Todo) {
    return this.todoSyncDatabaseService.save(todo);
  }
  getTodo(id: string) {
    return this.todoSyncDatabaseService.get(id);
  }
  getAllTodos() {
    const asyncDatabaseServiceFeatureEnabled = unleash.isEnabled(
      'async-database-service-feature',
    );

    if (asyncDatabaseServiceFeatureEnabled) {
      return this.todoAsyncDatabaseService.getAll();
    } else {
      return this.todoSyncDatabaseService.getAll();
    }
  }
}
