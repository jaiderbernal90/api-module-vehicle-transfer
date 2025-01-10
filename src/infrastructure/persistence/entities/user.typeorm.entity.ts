import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleTypeOrmEntity } from './role.typeorm.entity';
import { ProjectTypeOrmEntity } from './project.typeorm.entity';
import { TransferTypeOrmEntity } from './transfer.typeorm.entity';
import { OrganizationalUnitTypeOrmEntity } from './organizational-unit.typeorm.entity';

@Entity('users')
export class UserTypeOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', select: false })
  password_hash: string;

  @ManyToMany(() => RoleTypeOrmEntity, (role) => role.users)
  @JoinTable({
    name: 'users_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles: RoleTypeOrmEntity[];

  @ManyToMany(() => ProjectTypeOrmEntity, (project) => project.users)
  @JoinTable({
    name: 'users_projects',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'project_id',
      referencedColumnName: 'id',
    },
  })
  projects: ProjectTypeOrmEntity[];

  @OneToMany(() => TransferTypeOrmEntity, (transfer) => transfer.client)
  clientTransfers: TransferTypeOrmEntity[];

  @OneToMany(() => TransferTypeOrmEntity, (transfer) => transfer.transmitter)
  transmitterTransfers: TransferTypeOrmEntity[];

  @ManyToMany(() => OrganizationalUnitTypeOrmEntity, (unit) => unit.users)
  @JoinTable({
    name: 'users_organizational_units',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'organizational_unit_id',
      referencedColumnName: 'id',
    },
  })
  organizational_units: OrganizationalUnitTypeOrmEntity[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
