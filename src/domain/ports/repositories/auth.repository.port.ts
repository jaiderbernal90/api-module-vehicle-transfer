import { User } from '@/domain/entities/user.entity';

export interface IAuthRepository {
  findUserByEmail(email: string): Promise<User | null>;
  validatePassword(password: string, hashedPassword: string): Promise<boolean>;
}
