import { applyDecorators, Get } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';
import { Permission } from '@/core/constants/permissions.enum';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ListTransferDto } from '@/application/dtos/transfer/list-transfer.dto';

export function ListTransferDecorator() {
  return applyDecorators(
    Get(),
    RequirePermissions(Permission.VIEW_TRANSFERS),
    ApiOperation({ summary: 'Obtener todas las transferencias' }),
    ApiResponse({
      status: 200,
      description: 'Lista de transferencias',
      type: [ListTransferDto],
    }),
  );
}
