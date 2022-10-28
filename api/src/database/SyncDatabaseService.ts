import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class SyncDatabaseService<T> {
  abstract save(entity: T): T;

  abstract get(id: string): T;

  abstract getAll(): T[];
}
