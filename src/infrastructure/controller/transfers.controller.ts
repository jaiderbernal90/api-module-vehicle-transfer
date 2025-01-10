import { CreateTransferDto } from '@/application/dtos/transfer/create-transfer.dto';
import { UpdateTransferDto } from '@/application/dtos/transfer/update-transfer.dto';
import { CreateTransferDecorator } from '@/core/decorators/transfers/create-transfer.decorator';
import { DeleteTransferDecorator } from '@/core/decorators/transfers/delete-transfer.decorator';
import { GetTransferDecorator } from '@/core/decorators/transfers/get-transfer.decorator';
import { ListTransferDecorator } from '@/core/decorators/transfers/list-transfer.decorator';
import { UpdateTransferDecorator } from '@/core/decorators/transfers/update-transfer.decorator';
import { JwtAuthGuard } from '@/core/guards/jwt.guard';
import { PermissionsGuard } from '@/core/guards/permissions.guard';
import { TransferExceptionFilter } from '@/core/interceptors/transfer-exception.interceptor';
import {
  ITransferService,
  TRANSFER_SERVICE_TOKEN,
} from '@/domain/ports/services/transfer.service.port';
import { PageOptionsDto } from '@/shared/dtos/page-options.dto';
import {
  Body,
  Controller,
  Inject,
  Param,
  ParseIntPipe,
  Query,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('transfers')
@Controller('transfers')
@UseGuards(JwtAuthGuard, PermissionsGuard)
@UseFilters(TransferExceptionFilter)
@ApiBearerAuth()
export class TransferController {
  constructor(
    @Inject(TRANSFER_SERVICE_TOKEN)
    private readonly _transferSvc: ITransferService,
  ) {}

  @ListTransferDecorator()
  findAll(@Query() pageOptionsDto: PageOptionsDto, @Request() req) {
    const { user } = req;
    return this._transferSvc.findAll(
      {
        userUnits: user.organizational_units,
        userProjects: user.projects,
      },
      pageOptionsDto,
    );
  }

  @GetTransferDecorator()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this._transferSvc.get(id);
  }

  @CreateTransferDecorator()
  create(@Body() createTransferDto: CreateTransferDto, @Request() req) {
    return this._transferSvc.create(createTransferDto, req.user);
  }

  @UpdateTransferDecorator()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransferDto: UpdateTransferDto,
    @Request() req,
  ) {
    return this._transferSvc.update(id, updateTransferDto, req.user);
  }

  @DeleteTransferDecorator()
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this._transferSvc.delete(id, req.user);
  }
}
