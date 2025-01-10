import { applyDecorators, Get } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';
import { Permission } from '@/core/constants/permissions.enum';

export function ListTransferDecorator() {
  return applyDecorators(Get(), RequirePermissions(Permission.VIEW_TRANSFERS));
}
