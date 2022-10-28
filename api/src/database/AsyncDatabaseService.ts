import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class AsyncDatabaseService<T> {
  abstract save(entity: T): Promise<T>;

  abstract get(id: string): Promise<T>;

  abstract getAll(): Promise<T[]>;
}
