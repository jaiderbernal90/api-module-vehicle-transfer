import { Module } from '@nestjs/common';
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
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>(CONFIG.JWT_SECRET),
        signOptions: { expiresIn: '4h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [
    JwtStrategy,
    {
      provide: 'IAuthService',
      useClass: AuthService,
    },
    {
      provide: 'IAuthRepository',
      useClass: AuthRepository,
    },
  ],
})
export class AppModule {}
