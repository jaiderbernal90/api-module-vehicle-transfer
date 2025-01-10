import { applyDecorators, Post } from '@nestjs/common';
import { RequirePermissions } from '../permissions.decorator';
import { Permission } from '@/core/constants/permissions.enum';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTransferDto } from '@/application/dtos/transfer/create-transfer.dto';

export function CreateTransferDecorator() {
  return applyDecorators(
    Post(),
    RequirePermissions(Permission.CREATE_TRANSFERS),
    ApiOperation({ summary: 'Crear una nueva transferencia' }),
    ApiResponse({
      status: 201,
      description: 'Transferencia creada exitosamente',
      type: CreateTransferDto,
    }),
    ApiResponse({ status: 403, description: 'Forbidden' }),
  );
}
