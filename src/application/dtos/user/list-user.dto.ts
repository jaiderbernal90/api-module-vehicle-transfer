import { ApiProperty } from '@nestjs/swagger';
import { ListTransferDto } from '../transfer/list-transfer.dto';
import { ListRoleDto } from '../role/list-role.dto';
import { ListProjectDto } from '../project/list-project.dto';
import { ListOrganizationalUnitDto } from '../organizational-unit/list-organizational-unit.dto';

export class ListUserDto {
  @ApiProperty({
    description: 'Identificador único del usuario',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nombre de usuario',
    example: 'john_doe',
  })
  username: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Hash de la contraseña del usuario',
    example: '$2b$10$...',
    writeOnly: true,
  })
  password_hash: string;

  @ApiProperty({
    description: 'Roles asignados al usuario',
    type: [ListRoleDto],
    required: false,
    isArray: true,
  })
  roles?: ListRoleDto[];

  @ApiProperty({
    description: 'Proyectos asociados al usuario',
    type: [ListProjectDto],
    required: false,
    isArray: true,
  })
  projects?: ListProjectDto[];

  @ApiProperty({
    description: 'Transferencias donde el usuario es cliente',
    type: [ListTransferDto],
    required: false,
    isArray: true,
  })
  client_transfers?: ListTransferDto[];

  @ApiProperty({
    description: 'Transferencias donde el usuario es transmisor',
    type: [ListTransferDto],
    required: false,
    isArray: true,
  })
  transmitter_transfers?: ListTransferDto[];

  @ApiProperty({
    description: 'Unidades organizacionales asociadas al usuario',
    type: [ListOrganizationalUnitDto],
    required: false,
    isArray: true,
  })
  organizational_units?: ListOrganizationalUnitDto[];

  @ApiProperty({
    description: 'Fecha de creación del usuario',
    example: '2024-01-10T12:00:00Z',
    type: Date,
  })
  created_at!: Date;

  @ApiProperty({
    description: 'Fecha de última actualización del usuario',
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
