import { User } from '@/domain/entities/user.entity';

export const USER_REPOSITORY_TOKEN = 'USER_REPOSITORY_TOKEN';

export interface IUserRepository {
  find(id: number): Promise<User | null>;
}
