import { Project } from './project.entity';
import { Transfer } from './transfer.entity';

export class OrganizationalUnit {
  id: number;
  name: string;
  project_id: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  project: Project;
  transfers: Transfer[];
}
