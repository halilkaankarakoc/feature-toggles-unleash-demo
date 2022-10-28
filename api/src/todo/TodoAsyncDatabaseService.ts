import { Todo } from './common/Todo';
import { promises as fs } from 'fs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AsyncDatabaseService } from '../database/AsyncDatabaseService';

@Injectable()
export class TodoAsyncDatabaseService extends AsyncDatabaseService<Todo> {
  async get(id: string): Promise<Todo> {
    const jsonFile = await fs.readFile('src/db/todos.json', 'utf8');
    const json = JSON.parse(jsonFile);
    const todo = json[id];

    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  async getAll(): Promise<Todo[]> {
    console.log('Retrieving todos async way');
    const jsonFile = await fs.readFile('src/db/todos.json', 'utf8');
    const json = JSON.parse(jsonFile);
    return Object.values(json);
  }

  async save(entity: Todo): Promise<Todo> {
    const { id } = entity;
    const jsonFile = await fs.readFile('src/db/todos.json', 'utf8');
    const json = JSON.parse(jsonFile);

    json[id] = entity;

    await fs.writeFile('src/db/todos.json', JSON.stringify(json));
    return entity;
  }
}
