import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository, SelectQueryBuilder } from 'typeorm';
import { TransferTypeOrmEntity } from '../entities/transfer.typeorm.entity';
import { ITransferRepository } from '@/domain/ports/repositories/transfer.repository.port';
import { CreateTransferDto } from '@/application/dtos/transfer/create-transfer.dto';
import { UpdateTransferDto } from '@/application/dtos/transfer/update-transfer.dto';
import { FiltersUser } from '@/shared/interfaces/filters-users';
import { PageOptionsDto } from '@/shared/dtos/page-options.dto';

@Injectable()
export class TransferRepository implements ITransferRepository {
  constructor(
    @InjectRepository(TransferTypeOrmEntity)
    private readonly transferRepository: Repository<TransferTypeOrmEntity>,
  ) {}

  private readonly relationsList = [
    'vehicle',
    'client',
    'transmitter',
    'project',
    'organizational_unit',
  ];

  async create(data: CreateTransferDto): Promise<TransferTypeOrmEntity> {
    const transfer = this.transferRepository.create(data);
    return await this.transferRepository.save(transfer);
  }

  async findById(id: number): Promise<TransferTypeOrmEntity> {
    return await this.transferRepository.findOne({
      where: { id },
      relations: this.relationsList,
    });
  }

  async findAll(
    filters: FiltersUser,
    pageOptionsDto: PageOptionsDto,
  ): Promise<SelectQueryBuilder<TransferTypeOrmEntity>> {
    const queryBuilder = this.transferRepository.createQueryBuilder('transfer');

    return queryBuilder
      .leftJoinAndSelect('transfer.vehicle', 'vehicle')
      .leftJoinAndSelect('transfer.client', 'client')
      .leftJoinAndSelect('transfer.transmitter', 'transmitter')
      .leftJoinAndSelect('transfer.project', 'project')
      .leftJoinAndSelect('transfer.organizational_unit', 'organizational_unit')
      .where('project.id IN (:...projectIds)', {
        projectIds: filters.userProjects.map((p) => p.id),
      })
      .andWhere('organizational_unit.id IN (:...unitIds)', {
        unitIds: filters.userUnits.map((u) => u.id),
      })
      .orderBy('transfer.id', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);
  }

  async update(
    id: number,
    data: UpdateTransferDto,
  ): Promise<TransferTypeOrmEntity> {
    await this.transferRepository.update(id, data);
    return await this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.transferRepository.softDelete(id);
  }

  async findByClientId(clientId: number): Promise<TransferTypeOrmEntity[]> {
    return await this.transferRepository.find({
      where: { client: { id: clientId } },
      relations: this.relationsList,
      order: {
        created_at: 'DESC',
      },
    });
  }

  async findByVehicleId(vehicleId: number): Promise<TransferTypeOrmEntity[]> {
    return await this.transferRepository.find({
      where: { vehicle: { id: vehicleId } },
      relations: this.relationsList,
      order: {
        created_at: 'DESC',
      },
    });
  }

  async findByProjectId(projectId: number): Promise<TransferTypeOrmEntity[]> {
    return await this.transferRepository.find({
      where: { project: { id: projectId } },
      relations: this.relationsList,
      order: {
        created_at: 'DESC',
      },
    });
  }

  async findByOrganizationalUnitId(
    unitId: number,
  ): Promise<TransferTypeOrmEntity[]> {
    return await this.transferRepository.find({
      where: { organizational_unit: { id: unitId } },
      relations: this.relationsList,
      order: {
        created_at: 'DESC',
      },
    });
  }

  async findByTransmitterId(
    transmitterId: number,
  ): Promise<TransferTypeOrmEntity[]> {
    return await this.transferRepository.find({
      where: { transmitter: { id: transmitterId } },
      relations: this.relationsList,
      order: {
        created_at: 'DESC',
      },
    });
  }

  async findByDateRange(
    startDate: Date,
    endDate: Date,
  ): Promise<TransferTypeOrmEntity[]> {
    return await this.transferRepository.find({
      where: {
        created_at: Between(startDate, endDate),
      },
      relations: this.relationsList,
      order: {
        created_at: 'DESC',
      },
    });
  }
}
