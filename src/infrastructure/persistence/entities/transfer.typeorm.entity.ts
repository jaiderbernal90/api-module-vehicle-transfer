import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleTypeOrmEntity } from './vehicle.typeorm.entity';
import { UserTypeOrmEntity } from './user.typeorm.entity';
import { OrganizationalUnitTypeOrmEntity } from './organizational-unit.typeorm.entity';
import { ProjectTypeOrmEntity } from './project.typeorm.entity';

@Entity('transfers')
export class TransferTypeOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  type: string;

  @Column()
  vehicle_id: number;

  @Column()
  client_id: number;

  @Column()
  transmitter_id: number;

  @Column()
  project_id: number;

  @Column()
  organizational_unit_id: number;

  @ManyToOne(() => VehicleTypeOrmEntity, (vehicle) => vehicle.transfers)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: VehicleTypeOrmEntity;

  @ManyToOne(() => UserTypeOrmEntity, (user) => user.clientTransfers)
  @JoinColumn({ name: 'client_id' })
  client: UserTypeOrmEntity;

  @ManyToOne(() => UserTypeOrmEntity, (user) => user.transmitterTransfers)
  @JoinColumn({ name: 'transmitter_id' })
  transmitter: UserTypeOrmEntity;

  @ManyToOne(() => OrganizationalUnitTypeOrmEntity, (unit) => unit.transfers)
  @JoinColumn({ name: 'organizational_unit_id' })
  organizational_unit: OrganizationalUnitTypeOrmEntity;

  @ManyToOne(() => ProjectTypeOrmEntity, (project) => project.transfers)
  @JoinColumn({ name: 'project_id' })
  project: ProjectTypeOrmEntity;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
