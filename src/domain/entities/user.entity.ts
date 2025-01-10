import { Project } from './project.entity';
import { Role } from './role.entity';
import { Transfer } from './transfer.entity';

export class User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  roles?: Role[];
  projects?: Project[];
  clientTransfers?: Transfer[];
  transmitterTransfers?: Transfer[];
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
}
