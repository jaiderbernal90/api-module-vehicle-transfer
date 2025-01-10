import { applyDecorators, Put } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';
import { Permission } from '@/core/constants/permissions.enum';

export function UpdateTransferDecorator() {
  return applyDecorators(
    Put(':id'),
    RequirePermissions(Permission.UPDATE_TRANSFERS),
  );
}
