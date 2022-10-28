import { Module } from '@nestjs/common';
import { TodoModule } from './todo/TodoModule';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
