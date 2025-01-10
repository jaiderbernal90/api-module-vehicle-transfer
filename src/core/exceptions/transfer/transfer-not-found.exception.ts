import { HttpStatus } from '@nestjs/common';
import { BaseException } from '../base.exception';

export class TransferNotFoundException extends BaseException {
  constructor(transferId: number) {
    super('Transfer not found', HttpStatus.NOT_FOUND, {
      transferId,
      detail: `Transfer with id ${transferId} was not found`,
    });
  }
}
