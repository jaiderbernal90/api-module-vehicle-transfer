import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTransferDto {
  @IsString()
  @ApiProperty({
    description: 'Tipo de transferencia',
    example: 'venta',
  })
  type: string;

  @IsNumber()
  @ApiProperty({
    description: 'ID del vehículo',
    example: 1,
  })
  vehicle_id: number;

  @IsNumber()
  @ApiProperty({
    description: 'ID del cliente',
    example: 1,
  })
  client_id: number;

  @IsNumber()
  @ApiProperty({
    description: 'ID del tramitador',
    example: 1,
  })
  transmitter_id: number;

  @IsNumber()
  @ApiProperty({
    description: 'ID del proyecto',
    example: 1,
  })
  project_id: number;

  @IsNumber()
  @ApiProperty({
    description: 'ID de la unidad organizativa',
    example: 1,
  })
  organizational_unit_id: number;
}
