import { Permission } from '@/core/constants/permissions.enum';
import { applyDecorators, Get } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ListTransferDto } from '@/application/dtos/transfer/list-transfer.dto';

export function GetTransferDecorator() {
  return applyDecorators(
    Get(':id'),
    RequirePermissions(Permission.VIEW_TRANSFERS),
    ApiOperation({ summary: 'Obtener una transferencia por ID' }),
    ApiResponse({
      status: 200,
      description: 'Transferencia encontrada',
      type: ListTransferDto,
    }),
    ApiResponse({ status: 404, description: 'Not found' }),
  );
}
