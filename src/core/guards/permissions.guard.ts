import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Permission } from '../constants/permissions.enum';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<Permission[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermissions) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    const userPermissions = await this.getUserPermissions(user);
    const hasPermission = requiredPermissions.every((permission) =>
      userPermissions.includes(permission),
    );

    return hasPermission;
  }

  private async getUserPermissions(user: any): Promise<Permission[]> {
    const permissions = new Set<Permission>();

    if (!user.roles) return [];

    for (const role of user.roles) {
      if (role.permissions) {
        role.permissions.forEach((permission: any) => {
          const permissionName = permission.name || permission;
          permissions.add(permissionName);
        });
      }
    }

    return Array.from(permissions);
  }
}
