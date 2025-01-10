import { CreateTransferDto } from '@/application/dtos/transfer/create-transfer.dto';
import { ListTransferDto } from '@/application/dtos/transfer/list-transfer.dto';
import { UpdateTransferDto } from '@/application/dtos/transfer/update-transfer.dto';
import { Transfer } from '@/domain/entities/transfer.entity';
import { User } from '@/domain/entities/user.entity';
import { PageOptionsDto } from '@/shared/dtos/page-options.dto';
import { PageDto } from '@/shared/dtos/page.dto';
import { FiltersUser } from '@/shared/interfaces/filters-users';

export const TRANSFER_SERVICE_TOKEN = 'TRANSFER_SERVICE_TOKEN';

export interface ITransferService {
  findAll(
    filters: FiltersUser,
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<ListTransferDto>>;
  get(id: number): Promise<Transfer>;
  create(createTransferDto: CreateTransferDto, user: User): Promise<Transfer>;
  update(
    id: number,
    updateTransferDto: UpdateTransferDto,
    user: User,
  ): Promise<Transfer>;
  delete(id: number, user: User): Promise<Transfer>;
}
