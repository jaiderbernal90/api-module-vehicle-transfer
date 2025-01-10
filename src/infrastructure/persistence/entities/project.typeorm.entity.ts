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
import { UserTypeOrmEntity } from './user.typeorm.entity';
import { OrganizationalUnitTypeOrmEntity } from './organizational-unit.typeorm.entity';
import { TransferTypeOrmEntity } from './transfer.typeorm.entity';

@Entity('projects')
export class ProjectTypeOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToMany(() => UserTypeOrmEntity, (user) => user.projects)
  @JoinTable({
    name: 'users_projects',
    joinColumn: {
      name: 'project_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  users: UserTypeOrmEntity[];

  @OneToMany(() => OrganizationalUnitTypeOrmEntity, (unit) => unit.project)
  organizational_units: OrganizationalUnitTypeOrmEntity[];

  @OneToMany(() => TransferTypeOrmEntity, (transfer) => transfer.project)
  transfers: TransferTypeOrmEntity[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
