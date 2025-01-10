import { HttpStatus } from '@nestjs/common';
import { BaseException } from '../base.exception';

export class UnauthorizedProjectAccessException extends BaseException {
  constructor(projectId: number, userId: number) {
    super('Unauthorized access to project', HttpStatus.FORBIDDEN, {
      projectId,
      userId,
      detail: `User ${userId} does not have access to project ${projectId}`,
    });
  }
}
