import { ApiProperty } from '@nestjs/swagger';
import { ListTransferDto } from '../transfer/list-transfer.dto';
import { ListOrganizationalUnitDto } from '../organizational-unit/list-organizational-unit.dto';
import { ListUserDto } from '../user/list-user.dto';

export class ListProjectDto {
  @ApiProperty({
    description: 'Identificador único del proyecto',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nombre del proyecto',
    example: 'Proyecto Alpha',
  })
  name: string;

  @ApiProperty({
    description: 'Descripción detallada del proyecto',
    example: 'Proyecto de gestión de flota vehicular',
  })
  description: string;

  @ApiProperty({
    description: 'Usuarios asignados al proyecto',
    type: [ListUserDto],
    isArray: true,
  })
  users: ListUserDto[];

  @ApiProperty({
    description: 'Unidades organizacionales del proyecto',
    type: [ListOrganizationalUnitDto],
    isArray: true,
  })
  organizational_units: ListOrganizationalUnitDto[];

  @ApiProperty({
    description: 'Transferencias asociadas al proyecto',
    type: [ListTransferDto],
    isArray: true,
  })
  transfers: ListTransferDto[];

  @ApiProperty({
    description: 'Fecha de creación del proyecto',
    example: '2024-01-10T12:00:00Z',
  })
  created_at!: Date;

  @ApiProperty({
    description: 'Fecha de última actualización',
    example: '2024-01-10T12:00:00Z',
  })
  updated_at!: Date;

  @ApiProperty({
    description: 'Fecha de eliminación (soft delete)',
    example: '2024-01-10T12:00:00Z',
    required: false,
    nullable: true,
  })
  deleted_at?: Date;
}
