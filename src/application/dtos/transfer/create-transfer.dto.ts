import { IsNumber, IsString } from 'class-validator';

export class CreateTransferDto {
  @IsString()
  type: string;

  @IsNumber()
  vehicle_id: number;

  @IsNumber()
  client_id: number;

  @IsNumber()
  transmitter_id: number;

  @IsNumber()
  project_id: number;

  @IsNumber()
  organizational_unit_id: number;
}
