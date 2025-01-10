import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { json } from 'express';
import helmet from 'helmet';
import { CONFIG } from './config/constants';
import { ConfigService } from '@nestjs/config';
import * as compression from 'compression';
import { SecurityHeadersInterceptor } from './core/interceptors/security-headers.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.use(json({ limit: '60mb' }));
  app.use(helmet());
  app.enableCors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    maxAge: 3600,
  });

  app.use(compression());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalInterceptors(new SecurityHeadersInterceptor());

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Transfer API')
    .setDescription('API para gestión de transferencias vehiculares')
    .setVersion('1.0')
    .addTag('auth', 'Autenticación')
    .addTag('transfers', 'Gestión de transferencias')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const PORT = configService.get<string>(CONFIG.PORT);

  Logger.log(`Server running on port ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
