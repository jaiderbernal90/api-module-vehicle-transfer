import { TransferNotFoundException } from '@/core/exceptions/transfer/transfer-not-found.exception';
import {
  ITransferRepository,
  TRANSFER_REPOSITORY_TOKEN,
} from '@/domain/ports/repositories/transfer.repository.port';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetTransferUseCase {
  constructor(
    @Inject(TRANSFER_REPOSITORY_TOKEN)
    private readonly transferRepository: ITransferRepository,
  ) {}

  async execute() {
    const transfer = await this.transferRepository.findById(1);
    if (!transfer) {
      throw new TransferNotFoundException(1);
    }
    return transfer;
  }
}
