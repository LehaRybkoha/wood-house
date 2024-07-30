import { NestFactory } from '@nestjs/core';
import fs from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const keyFile = fs.readFileSync(__dirname + '/../localhost.key');
  const certFile = fs.readFileSync(__dirname + '/../localhost.crt');
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    httpsOptions: {
      key: keyFile,
      cert: certFile,
    },
  });
  await app.listen('8080');
}
bootstrap();
