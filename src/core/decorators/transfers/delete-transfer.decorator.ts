import { applyDecorators, Delete } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';
import { Permission } from '@/core/constants/permissions.enum';

export function DeleteTransferDecorator() {
  return applyDecorators(
    Delete(':id'),
    RequirePermissions(Permission.DELETE_TRANSFERS),
  );
}
