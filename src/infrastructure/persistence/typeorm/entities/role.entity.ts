import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles')
export class RoleTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => PermissionTypeOrmEntity)
  @JoinTable()
  permissions: PermissionTypeOrmEntity[];

  @ManyToMany(() => UserTypeOrmEntity, (user) => user.roles)
  users: UserTypeOrmEntity[];
}
