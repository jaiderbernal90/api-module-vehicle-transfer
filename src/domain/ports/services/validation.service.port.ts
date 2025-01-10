import { User } from '@/domain/entities/user.entity';

export const VALIDATION_SERVICE_TOKEN = 'VALIDATION_SERVICE_TOKEN';

export interface IValidationService {
  validateUserAccess(user: User, unitId: number, projectId: number): void;
  validateUserBelongsToUnit(user: User, unitId: number): void;
  validateUserBelongsToProject(user: User, projectId: number): void;
}
