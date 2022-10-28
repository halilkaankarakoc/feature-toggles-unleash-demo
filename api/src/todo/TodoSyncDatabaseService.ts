import { SyncDatabaseService } from '../database/SyncDatabaseService';
import { Todo } from './common/Todo';
import * as fs from 'fs';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TodoSyncDatabaseService extends SyncDatabaseService<Todo> {
  get(id: string): Todo {
    const json = JSON.parse(fs.readFileSync('src/db/todos.json', 'utf8'));
    const todo = json[id];

    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  getAll(): Todo[] {
    console.log('Retrieving todos sync way');
    const json = JSON.parse(fs.readFileSync('src/db/todos.json', 'utf8'));
    return Object.values(json);
  }

  save(entity: Todo): Todo {
    const { id } = entity;
    const json = JSON.parse(fs.readFileSync('src/db/todos.json', 'utf8'));

    json[id] = entity;

    fs.writeFileSync('src/db/todos.json', JSON.stringify(json));
    return entity;
  }
}
