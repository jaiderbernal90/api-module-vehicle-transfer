import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CONFIG } from './constants';
import { UserTypeOrmEntity } from '@/infrastructure/persistence/entities/user.typeorm.entity';
import { RoleTypeOrmEntity } from '@/infrastructure/persistence/entities/role.typeorm.entity';
import { ProjectTypeOrmEntity } from '@/infrastructure/persistence/entities/project.typeorm.entity';
import { PermissionTypeOrmEntity } from '@/infrastructure/persistence/entities/permission.typeorm.entity';
import { VehicleTypeOrmEntity } from '@/infrastructure/persistence/entities/vehicle.typeorm.entity';
import { TransferTypeOrmEntity } from '@/infrastructure/persistence/entities/transfer.typeorm.entity';
import { OrganizationalUnitTypeOrmEntity } from '../infrastructure/persistence/entities/organizational-unit.typeorm.entity';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>(CONFIG.DB.HOST),
  port: +configService.get<number>(CONFIG.DB.PORT),
  username: configService.get<string>(CONFIG.DB.USER),
  password: configService.get<string>(CONFIG.DB.PASS),
  database: configService.get<string>(CONFIG.DB.NAME),
  entities: [
    UserTypeOrmEntity,
    RoleTypeOrmEntity,
    ProjectTypeOrmEntity,
    PermissionTypeOrmEntity,
    VehicleTypeOrmEntity,
    OrganizationalUnitTypeOrmEntity,
    TransferTypeOrmEntity,
  ],
  synchronize: true,
  logging: true,
  logger: 'advanced-console',
});
