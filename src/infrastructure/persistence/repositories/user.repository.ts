import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTypeOrmEntity } from '../entities/user.typeorm.entity';
import { IUserRepository } from '@/domain/ports/repositories/user.repository.port';
import { User } from '@/domain/entities/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserTypeOrmEntity)
    private readonly userRepository: Repository<UserTypeOrmEntity>,
  ) {}

  async find(id: number): Promise<User> {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'roles')
      .leftJoinAndSelect('roles.permissions', 'permissions')
      .leftJoinAndSelect('user.projects', 'projects')
      .leftJoinAndSelect('user.organizational_units', 'organizationalUnits')
      .where('user.id = :id', { id })
      .getOne();
  }
}
