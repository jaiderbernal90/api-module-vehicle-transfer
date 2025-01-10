import { ApiProperty } from '@nestjs/swagger';
import { ListVehicleDto } from '../vehicle/list-vehicle.dto';
import { ListOrganizationalUnitDto } from '../organizational-unit/list-organizational-unit.dto';
import { ListProjectDto } from '../project/list-project.dto';
import { ListUserDto } from '../user/list-user.dto';

export class ListTransferDto {
  @ApiProperty({
    description: 'Identificador único de la transferencia',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Tipo de transferencia',
    example: 'Venta',
  })
  type: string;

  @ApiProperty({
    description: 'ID del vehículo transferido',
    example: 1,
  })
  vehicle_id: number;

  @ApiProperty({
    description: 'ID del cliente que recibe la transferencia',
    example: 2,
  })
  client_id: number;

  @ApiProperty({
    description: 'ID del usuario que realiza la transferencia',
    example: 3,
  })
  transmitter_id: number;

  @ApiProperty({
    description: 'ID del proyecto asociado',
    example: 1,
  })
  project_id: number;

  @ApiProperty({
    description: 'ID de la unidad organizacional',
    example: 1,
  })
  organizational_unit_id: number;

  @ApiProperty({
    description: 'Información detallada del vehículo',
    type: () => ListVehicleDto,
  })
  vehicle: ListVehicleDto;

  @ApiProperty({
    description: 'Información del cliente receptor',
    type: () => ListUserDto,
    required: false,
    nullable: true,
  })
  client?: ListUserDto;

  @ApiProperty({
    description: 'Información del usuario que realiza la transferencia',
    type: () => ListUserDto,
    required: false,
    nullable: true,
  })
  transmitter?: ListUserDto;

  @ApiProperty({
    description: 'Información de la unidad organizacional',
    type: () => ListOrganizationalUnitDto,
    required: false,
    nullable: true,
  })
  organizational_unit?: ListOrganizationalUnitDto;

  @ApiProperty({
    description: 'Información del proyecto',
    type: () => ListProjectDto,
    required: false,
    nullable: true,
  })
  project?: ListProjectDto;

  @ApiProperty({
    description: 'Fecha de creación del registro',
    example: '2024-01-10T12:00:00Z',
    type: Date,
  })
  created_at!: Date;

  @ApiProperty({
    description: 'Fecha de última actualización',
    example: '2024-01-10T12:00:00Z',
    type: Date,
  })
  updated_at!: Date;

  @ApiProperty({
    description: 'Fecha de eliminación (soft delete)',
    example: '2024-01-10T12:00:00Z',
    type: Date,
    required: false,
    nullable: true,
  })
  deleted_at?: Date;
}
