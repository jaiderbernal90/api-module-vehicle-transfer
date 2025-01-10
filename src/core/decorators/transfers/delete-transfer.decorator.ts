import { applyDecorators, Delete } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';
import { Permission } from '@/core/constants/permissions.enum';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function DeleteTransferDecorator() {
  return applyDecorators(
    Delete(':id'),
    RequirePermissions(Permission.DELETE_TRANSFERS),
    ApiOperation({ summary: 'Eliminar una transferencia' }),
    ApiResponse({ status: 200, description: 'Transferencia eliminada' }),
    ApiResponse({ status: 404, description: 'Not found' }),
    ApiResponse({ status: 403, description: 'Forbidden' }),
  );
}
