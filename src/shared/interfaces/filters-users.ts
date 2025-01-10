import { OrganizationalUnit } from '@/domain/entities/organizational-unit.entity';
import { Project } from '@/domain/entities/project.entity';

export interface FiltersUser {
  userUnits: OrganizationalUnit[];
  userProjects: Project[];
}
