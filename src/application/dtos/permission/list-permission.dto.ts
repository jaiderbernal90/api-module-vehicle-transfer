import { ApiProperty } from '@nestjs/swagger';
import { ListRoleDto } from '../role/list-role.dto';

export class ListPermissionDto {
  @ApiProperty({
    description: 'Identificador único del permiso',
    example: 'CREATE_USER',
  })
  id: string;

  @ApiProperty({
    description: 'Nombre del permiso',
    example: 'CREATE_USER',
  })
  name: string;

  @ApiProperty({
    description: 'Descripción detallada del permiso',
    example: 'Permite crear nuevos usuarios en el sistema',
  })
  description: string;

  @ApiProperty({
    description: 'Roles que tienen este permiso',
    type: [ListRoleDto],
    isArray: true,
  })
  roles: ListRoleDto[];

  @ApiProperty({
    description: 'Fecha de creación del permiso',
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
