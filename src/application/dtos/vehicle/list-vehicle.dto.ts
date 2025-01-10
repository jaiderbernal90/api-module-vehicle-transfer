import { ApiProperty } from '@nestjs/swagger';
import { ListTransferDto } from '../transfer/list-transfer.dto';

export class ListVehicleDto {
  @ApiProperty({
    description: 'Identificador único del vehículo',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Placa del vehículo',
    example: 'ABC123',
  })
  plate: string;

  @ApiProperty({
    description: 'Tipo de servicio del vehículo',
    example: 'PARTICULAR',
  })
  service: string;

  @ApiProperty({
    description: 'Historial de transferencias del vehículo',
    type: [ListTransferDto],
    required: false,
    isArray: true,
  })
  transfers?: ListTransferDto[];

  @ApiProperty({
    description: 'Fecha de registro del vehículo',
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
