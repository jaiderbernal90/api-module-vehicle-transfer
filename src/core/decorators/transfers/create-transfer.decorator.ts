import { applyDecorators, Post } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';
import { Permission } from '@/core/constants/permissions.enum';

export function CreateTransferDecorator() {
  return applyDecorators(
    Post(),
    RequirePermissions(Permission.CREATE_TRANSFERS),
  );
}
