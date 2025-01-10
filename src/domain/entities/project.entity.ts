import { OrganizationalUnit } from './organizational-unit.entity';
import { Transfer } from './transfer.entity';
import { User } from './user.entity';

export class Project {
  id: number;
  name: string;
  description: string;
  users: User[];
  organizational_units: OrganizationalUnit[];
  transfers: Transfer[];
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
}
