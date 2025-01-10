import { Role } from './role.entity';

export class Permission {
  id: string;
  name: string;
  description: string;
  roles: Role[];
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
}
