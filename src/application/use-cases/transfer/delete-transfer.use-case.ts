import { TransferNotFoundException } from '@/core/exceptions/transfer/transfer-not-found.exception';
import { Transfer } from '@/domain/entities/transfer.entity';
import { User } from '@/domain/entities/user.entity';
import {
  ITransferRepository,
  TRANSFER_REPOSITORY_TOKEN,
} from '@/domain/ports/repositories/transfer.repository.port';
import {
  IValidationService,
  VALIDATION_SERVICE_TOKEN,
} from '@/domain/ports/services/validation.service.port';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteTransferUseCase {
  constructor(
    @Inject(TRANSFER_REPOSITORY_TOKEN)
    private readonly transferRepository: ITransferRepository,
    @Inject(VALIDATION_SERVICE_TOKEN)
    private readonly validationService: IValidationService,
  ) {}

  async execute(id: number, user: User): Promise<Transfer> {
    const transfer = await this.transferRepository.findById(id);
    if (!transfer) {
      throw new TransferNotFoundException(id);
    }

    this.validationService.validateUserBelongsToUnit(
      user,
      transfer.organizational_unit.id,
    );

    await this.transferRepository.delete(id);
    return transfer;
  }
}
