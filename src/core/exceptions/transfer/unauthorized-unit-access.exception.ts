import { HttpStatus } from '@nestjs/common';
import { BaseException } from '../base.exception';

export class UnauthorizedUnitAccessException extends BaseException {
  constructor(unitId: number, userId: number) {
    super('Unauthorized access to organizational unit', HttpStatus.FORBIDDEN, {
      unitId,
      userId,
      detail: `User ${userId} does not have access to organizational unit ${unitId}`,
    });
  }
}
