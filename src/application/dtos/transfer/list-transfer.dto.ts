import { OrganizationalUnit } from '@/domain/entities/organizational-unit.entity';
import { Project } from '@/domain/entities/project.entity';
import { User } from '@/domain/entities/user.entity';
import { Vehicle } from '@/domain/entities/vehicle.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ListTransferDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  type: string;
  @ApiProperty()
  vehicle_id: number;
  @ApiProperty()
  client_id: number;
  @ApiProperty()
  transmitter_id: number;
  @ApiProperty()
  project_id: number;
  @ApiProperty()
  organizational_unit_id: number;
  @ApiProperty()
  vehicle: Vehicle;
  @ApiProperty()
  client?: User;
  @ApiProperty()
  transmitter?: User;
  @ApiProperty()
  organizational_unit?: OrganizationalUnit;
  @ApiProperty()
  project?: Project;
  @ApiProperty()
  created_at!: Date;
  @ApiProperty()
  updated_at!: Date;
  @ApiProperty()
  deleted_at?: Date;
}
