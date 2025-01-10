import { Injectable } from '@nestjs/common';
import { User } from '@/domain/entities/user.entity';
import { UnauthorizedUnitAccessException } from '@/core/exceptions/transfer/unauthorized-unit-access.exception';
import { UnauthorizedProjectAccessException } from '@/core/exceptions/transfer/unauthorized-project-access.exception';
import { IValidationService } from '@/domain/ports/services/validation.service.port';

@Injectable()
export class ValidationService implements IValidationService {
  validateUserAccess(user: User, unitId: number, projectId: number): void {
    this.validateUserBelongsToUnit(user, unitId);
    this.validateUserBelongsToProject(user, projectId);
  }

  validateUserBelongsToUnit(user: User, unitId: number): void {
    const hasUnitAccess = user?.organizational_units?.some(
      (unit) => unit.id === unitId,
    );
    if (!hasUnitAccess) {
      throw new UnauthorizedUnitAccessException(unitId, user.id);
    }
  }

  validateUserBelongsToProject(user: User, projectId: number): void {
    const hasProjectAccess = user.projects.some(
      (project) => project.id === projectId,
    );
    if (!hasProjectAccess) {
      throw new UnauthorizedProjectAccessException(projectId, user.id);
    }
  }
}
