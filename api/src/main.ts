import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import * as unleash from 'unleash-client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  unleash.initialize({
    url: 'http://localhost:4242/api/',
    appName: 'feature-toggles-demo',
    environment: 'dev',
    customHeaders: {
      Authorization: 'default:development.unleash-insecure-api-token',
    },
  });

  await app.listen(3031);
}
bootstrap();
