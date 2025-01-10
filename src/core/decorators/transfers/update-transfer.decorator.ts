import { applyDecorators, Put } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';
import { Permission } from '@/core/constants/permissions.enum';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateTransferDto } from '../../../application/dtos/transfer/update-transfer.dto';

export function UpdateTransferDecorator() {
  return applyDecorators(
    Put(':id'),
    RequirePermissions(Permission.UPDATE_TRANSFERS),
    ApiOperation({ summary: 'Actualizar una transferencia' }),
    ApiResponse({
      status: 200,
      description: 'Transferencia actualizada',
      type: UpdateTransferDto,
    }),
    ApiResponse({ status: 404, description: 'Not found' }),
    ApiResponse({ status: 403, description: 'Forbidden' }),
  );
}
