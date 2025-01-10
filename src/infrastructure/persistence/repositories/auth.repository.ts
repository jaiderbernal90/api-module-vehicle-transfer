import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/domain/entities/user.entity';
import { IAuthRepository } from '@/domain/ports/repositories/auth.repository.port';
import { UserTypeOrmEntity } from '../entities/user.typeorm.entity';
import { compareHash } from '@/shared/utils/handleBycript';

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(
    @InjectRepository(UserTypeOrmEntity)
    private readonly userRepository: Repository<UserTypeOrmEntity>,
  ) {}

  async findUserWithFullAccess(id: number): Promise<UserTypeOrmEntity> {
    return await this.userRepository.findOne({
      where: { id },
      relations: [
        'roles',
        'roles.permissions',
        'projects',
        'organizational_units',
      ],
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'username', 'password_hash'],
    });
  }

  async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await compareHash(password, hashedPassword);
  }
}
