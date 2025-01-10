import { ApiProperty } from '@nestjs/swagger';
import { ListPermissionDto } from '../permission/list-permission.dto';
import { ListUserDto } from '../user/list-user.dto';

export class ListRoleDto {
  @ApiProperty({
    description: 'Identificador único del rol',
    example: '1',
  })
  id: string;

  @ApiProperty({
    description: 'Nombre del rol',
    example: 'ADMIN',
  })
  name: string;

  @ApiProperty({
    description: 'Descripción detallada del rol',
    example: 'Administrador del sistema',
  })
  description: string;

  @ApiProperty({
    description: 'Lista de permisos asociados al rol',
    type: [ListPermissionDto],
    required: false,
    isArray: true,
  })
  permissions?: ListPermissionDto[];

  @ApiProperty({
    description: 'Usuarios que tienen este rol asignado',
    type: [ListUserDto],
    required: false,
    isArray: true,
  })
  users?: ListUserDto[];

  @ApiProperty({
    description: 'Fecha de creación del rol',
    example: '2024-01-10T12:00:00Z',
    type: Date,
  })
  created_at!: Date;

  @ApiProperty({
    description: 'Fecha de última actualización del rol',
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
