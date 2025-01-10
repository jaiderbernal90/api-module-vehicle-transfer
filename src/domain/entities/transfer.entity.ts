import { OrganizationalUnit } from './organizational-unit.entity';
import { Project } from './project.entity';
import { User } from './user.entity';
import { Vehicle } from './vehicle.entity';

export class Transfer {
  id: number;
  type: string;
  vehicle_id: number;
  client_id: number;
  transmitter_id: number;
  project_id: number;
  organizational_unit_id: number;
  vehicle: Vehicle;
  client?: User;
  transmitter?: User;
  organizational_unit?: OrganizationalUnit;
  project?: Project;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
}
