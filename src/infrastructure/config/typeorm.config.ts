import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CONFIG } from './constants';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>(CONFIG.DB.HOST),
  port: +configService.get<number>(CONFIG.DB.PORT),
  username: configService.get<string>(CONFIG.DB.USER),
  password: configService.get<string>(CONFIG.DB.PASS),
  database: configService.get<string>(CONFIG.DB.NAME),
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: configService.get('NODE_ENV') !== 'production',
});
