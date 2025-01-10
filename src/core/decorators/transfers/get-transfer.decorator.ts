import { Permission } from '@/core/constants/permissions.enum';
import { applyDecorators, Get } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';

export function GetTransferDecorator() {
  return applyDecorators(
    Get(':id'),
    RequirePermissions(Permission.VIEW_TRANSFERS),
  );
}
