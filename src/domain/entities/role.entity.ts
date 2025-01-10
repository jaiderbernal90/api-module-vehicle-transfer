import { Permission } from './permission.entity';
import { User } from './user.entity';

export class Role {
  id: string;
  name: string;
  description: string;
  permissions?: Permission[];
  users?: User[];
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
}
