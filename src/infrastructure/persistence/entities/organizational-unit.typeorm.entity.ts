import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { ProjectTypeOrmEntity } from './project.typeorm.entity';
import { TransferTypeOrmEntity } from './transfer.typeorm.entity';

@Entity('organizational_units')
export class OrganizationalUnitTypeOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column()
  project_id: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @ManyToOne(
    () => ProjectTypeOrmEntity,
    (project) => project.organizational_units,
  )
  @JoinColumn({ name: 'project_id' })
  project: ProjectTypeOrmEntity;

  @OneToMany(
    () => TransferTypeOrmEntity,
    (transfer) => transfer.organizational_unit,
  )
  transfers: TransferTypeOrmEntity[];
}
