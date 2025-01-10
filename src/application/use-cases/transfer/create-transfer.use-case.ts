import { CreateTransferDto } from '@/application/dtos/transfer/create-transfer.dto';
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
export class CreateTransferUseCase {
  constructor(
    @Inject(TRANSFER_REPOSITORY_TOKEN)
    private readonly transferRepository: ITransferRepository,
    @Inject(VALIDATION_SERVICE_TOKEN)
    private readonly validationService: IValidationService,
  ) {}

  async execute(
    createTransferDto: CreateTransferDto,
    user: User,
  ): Promise<Transfer> {
    this.validationService.validateUserAccess(
      user,
      createTransferDto.organizational_unit_id,
      createTransferDto.project_id,
    );

    return this.transferRepository.create(createTransferDto);
  }
}
