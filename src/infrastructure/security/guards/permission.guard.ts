import { PERMISSIONS_KEY } from '@/application/decorators/permissions.decorator';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject('IRoleRepository')
    private roleRepository: IRoleRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermissions) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id;

    if (!userId) {
      return false;
    }

    return this.validatePermissions(userId, requiredPermissions);
  }

  private async validatePermissions(
    userId: string,
    permissions: string[],
  ): Promise<boolean> {
    for (const permission of permissions) {
      const hasPermission = await this.roleRepository.hasPermission(
        userId,
        permission,
      );
      if (!hasPermission) return false;
    }
    return true;
  }
}
