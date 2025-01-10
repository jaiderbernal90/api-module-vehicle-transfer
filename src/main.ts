import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { json } from 'express';
import helmet from 'helmet';
import { CONFIG } from './config/constants';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.use(json({ limit: '60mb' }));
  app.use(helmet());
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.setGlobalPrefix('api/v1');

  const PORT = configService.get<string>(CONFIG.PORT);

  Logger.log(`Server running on port ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
