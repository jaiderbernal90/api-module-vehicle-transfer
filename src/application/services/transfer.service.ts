import { CreateTransferUseCase } from '@/application/use-cases/transfer/create-transfer.use-case';
import { DeleteTransferUseCase } from '@/application/use-cases/transfer/delete-transfer.use-case';
import { GetAllTransfersUseCase } from '@/application/use-cases/transfer/get-all-transfers.use-case';
import { GetTransferUseCase } from '@/application/use-cases/transfer/get-transfer.use-case';
import { UpdateTransferUseCase } from '@/application/use-cases/transfer/update-transfer.use-case';
import { ITransferService } from '@/domain/ports/services/transfer.service.port';
import { Injectable } from '@nestjs/common';
import { CreateTransferDto } from '../dtos/transfer/create-transfer.dto';
import { Transfer } from '@/domain/entities/transfer.entity';
import { UpdateTransferDto } from '../dtos/transfer/update-transfer.dto';
import { FiltersUser } from '@/shared/interfaces/filters-users';
import { User } from '@/domain/entities/user.entity';
import { PageOptionsDto } from '@/shared/dtos/page-options.dto';
import { PageDto } from '@/shared/dtos/page.dto';
import { ListTransferDto } from '../dtos/transfer/list-transfer.dto';

@Injectable()
export class TransferService implements ITransferService {
  constructor(
    private readonly createTransferUseCase: CreateTransferUseCase,
    private readonly getTransferUseCase: GetTransferUseCase,
    private readonly getAllTransfersUseCase: GetAllTransfersUseCase,
    private readonly updateTransferUseCase: UpdateTransferUseCase,
    private readonly deleteTransferUseCase: DeleteTransferUseCase,
  ) {}

  async findAll(
    filters: FiltersUser,
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<ListTransferDto>> {
    return this.getAllTransfersUseCase.execute(filters, pageOptionsDto);
  }

  async get(): Promise<Transfer> {
    return this.getTransferUseCase.execute();
  }

  async create(
    createTransferDto: CreateTransferDto,
    user: User,
  ): Promise<Transfer> {
    return this.createTransferUseCase.execute(createTransferDto, user);
  }

  async update(
    id: number,
    updateTransferDto: UpdateTransferDto,
    user: User,
  ): Promise<Transfer> {
    return this.updateTransferUseCase.execute(id, updateTransferDto, user);
  }

  async delete(id: number, user: User): Promise<Transfer> {
    return this.deleteTransferUseCase.execute(id, user);
  }
}
