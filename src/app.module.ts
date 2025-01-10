import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '@/config/typeorm.config';
import { JwtModule } from '@nestjs/jwt';
import { CONFIG } from './config/constants';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthController } from './infrastructure/controller/auth.controller';
import { AppController } from './infrastructure/controller/app.controller';
import { JwtStrategy } from './config/jwt.strategy';
import { AuthService } from './application/services/auth.service';
import { AuthRepository } from './infrastructure/persistence/repositories/auth.repository';
import { LoginUseCase } from './application/use-cases/auth/login.use-case';
import { AUTH_SERVICE_TOKEN } from './domain/ports/services/auth.service.port';
import { UserTypeOrmEntity } from './infrastructure/persistence/entities/user.typeorm.entity';
import { AUTH_REPOSITORY_TOKEN } from './domain/ports/repositories/auth.repository.port';
import { TransferTypeOrmEntity } from './infrastructure/persistence/entities/transfer.typeorm.entity';
import { TRANSFER_REPOSITORY_TOKEN } from './domain/ports/repositories/transfer.repository.port';
import { TransferRepository } from './infrastructure/persistence/repositories/transfer.repository';
import { TRANSFER_SERVICE_TOKEN } from './domain/ports/services/transfer.service.port';
import { TransferService } from './application/services/transfer.service';
import { CreateTransferUseCase } from './application/use-cases/transfer/create-transfer.use-case';
import { UpdateTransferUseCase } from './application/use-cases/transfer/update-transfer.use-case';
import { GetTransferUseCase } from './application/use-cases/transfer/get-transfer.use-case';
import { DeleteTransferUseCase } from './application/use-cases/transfer/delete-transfer.use-case';
import { TransferController } from './infrastructure/controller/transfers.controller';
import { USER_REPOSITORY_TOKEN } from './domain/ports/repositories/user.repository.port';
import { UserRepository } from './infrastructure/persistence/repositories/user.repository';
import { GetAllTransfersUseCase } from './application/use-cases/transfer/get-all-transfers.use-case';
import { ValidationService } from './application/services/validation.service';
import { VALIDATION_SERVICE_TOKEN } from './domain/ports/services/validation.service.port';
import { APP_GUARD } from '@nestjs/core';
import { CustomThrottlerGuard } from './core/guards/throttle.guard';
import { SecurityLoggingMiddleware } from './infrastructure/middleware/security-logging.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        typeOrmConfig(configService),
    }),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>(CONFIG.JWT_SECRET),
        signOptions: { expiresIn: '4h' },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserTypeOrmEntity, TransferTypeOrmEntity]),
  ],
  controllers: [AppController, AuthController, TransferController],
  providers: [
    JwtStrategy,
    LoginUseCase,
    CreateTransferUseCase,
    UpdateTransferUseCase,
    GetTransferUseCase,
    DeleteTransferUseCase,
    GetAllTransfersUseCase,
    {
      provide: AUTH_SERVICE_TOKEN,
      useClass: AuthService,
    },
    {
      provide: TRANSFER_SERVICE_TOKEN,
      useClass: TransferService,
    },
    {
      provide: VALIDATION_SERVICE_TOKEN,
      useClass: ValidationService,
    },
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserRepository,
    },
    {
      provide: AUTH_REPOSITORY_TOKEN,
      useClass: AuthRepository,
    },
    {
      provide: TRANSFER_REPOSITORY_TOKEN,
      useClass: TransferRepository,
    },
    {
      provide: APP_GUARD,
      useClass: CustomThrottlerGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SecurityLoggingMiddleware).forRoutes('*');
  }
}
