import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TransferTypeOrmEntity } from './transfer.typeorm.entity';

@Entity('vehicles')
export class VehicleTypeOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10 })
  plate: string;

  @Column({ type: 'varchar', length: 100 })
  service: string;

  @OneToMany(() => TransferTypeOrmEntity, (transfer) => transfer.vehicle)
  transfers: TransferTypeOrmEntity[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
