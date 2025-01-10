import { ApiProperty } from '@nestjs/swagger';
import { ListTransferDto } from '../transfer/list-transfer.dto';
import { ListProjectDto } from '../project/list-project.dto';

export class ListOrganizationalUnitDto {
  @ApiProperty({
    description: 'Identificador único de la unidad organizacional',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nombre de la unidad organizacional',
    example: 'Departamento de Logística',
  })
  name: string;

  @ApiProperty({
    description: 'ID del proyecto al que pertenece',
    example: 1,
  })
  project_id: number;

  @ApiProperty({
    description: 'Información del proyecto asociado',
    type: () => ListProjectDto,
  })
  project: ListProjectDto;

  @ApiProperty({
    description: 'Transferencias asociadas a la unidad',
    type: [ListTransferDto],
    isArray: true,
  })
  transfers: ListTransferDto[];

  @ApiProperty({
    description: 'Fecha de creación',
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
