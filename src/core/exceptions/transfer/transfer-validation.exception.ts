import { HttpStatus } from '@nestjs/common';
import { BaseException } from '../base.exception';

export class TransferValidationException extends BaseException {
  constructor(details: string | Record<string, any>) {
    super('Error validating transfer data', HttpStatus.BAD_REQUEST, details);
  }
}
