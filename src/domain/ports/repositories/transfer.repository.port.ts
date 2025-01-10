import { CreateTransferDto } from '@/application/dtos/transfer/create-transfer.dto';
import { UpdateTransferDto } from '@/application/dtos/transfer/update-transfer.dto';
import { Transfer } from '@/domain/entities/transfer.entity';
import { PageOptionsDto } from '@/shared/dtos/page-options.dto';
import { FiltersUser } from '@/shared/interfaces/filters-users';
import { SelectQueryBuilder } from 'typeorm';

export const TRANSFER_REPOSITORY_TOKEN = 'TRANSFER_REPOSITORY_TOKEN';

export interface ITransferRepository {
  create(data: CreateTransferDto): Promise<Transfer>;
  findById(id: number): Promise<Transfer>;
  findAll(
    filters: FiltersUser,
    pageOptionsDto: PageOptionsDto,
  ): Promise<SelectQueryBuilder<Transfer>>;
  update(id: number, data: UpdateTransferDto): Promise<Transfer>;
  delete(id: number): Promise<void>;
  findByClientId(clientId: number): Promise<Transfer[]>;
  findByVehicleId(vehicleId: number): Promise<Transfer[]>;
  findByProjectId(projectId: number): Promise<Transfer[]>;
}
