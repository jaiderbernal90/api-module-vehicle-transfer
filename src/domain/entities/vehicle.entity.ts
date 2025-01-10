import { Transfer } from './transfer.entity';

export class Vehicle {
  id: number;
  plate: string;
  service: string;
  transfers?: Transfer[];
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
}
