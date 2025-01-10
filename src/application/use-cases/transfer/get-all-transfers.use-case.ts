import {
  ITransferRepository,
  TRANSFER_REPOSITORY_TOKEN,
} from '@/domain/ports/repositories/transfer.repository.port';
import { PageMetaDto } from '@/shared/dtos/page-meta.dto';
import { PageOptionsDto } from '@/shared/dtos/page-options.dto';
import { PageDto } from '@/shared/dtos/page.dto';
import { FiltersUser } from '@/shared/interfaces/filters-users';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetAllTransfersUseCase {
  constructor(
    @Inject(TRANSFER_REPOSITORY_TOKEN)
    private readonly transferRepository: ITransferRepository,
  ) {}

  async execute(filters: FiltersUser, pageOptionsDto: PageOptionsDto) {
    const { userUnits, userProjects } = filters;
    const queryBuilder = await this.transferRepository.findAll(
      {
        userUnits,
        userProjects,
      },
      pageOptionsDto,
    );

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }
}
