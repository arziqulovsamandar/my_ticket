import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../decorators/roles-auth.decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({
        message: "Foydalanuvchi avtorizatsiyadan o'tmagan1",
      });
    }

    const bearer = authHeader.split(' ')[0];
    const token = authHeader.split(' ')[1];

    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException({
        message: "Foydalanuvchi avtorixatsiyadan o'tmagan2",
      });
    }

    let user: any;
    try {
      user = this.jwtService.verify(token);
      console.log(user);
    } catch (error) {
      throw new UnauthorizedException({
        message: "Foydalanuvchi avtorizatsiyadan o'tmagan3",
      });
    }
    req.user = user;

    const permission = user.roles.some((role: any) =>
      requiredRoles.includes(role.value),
    );
    if (!permission) {
      throw new ForbiddenException({
        message: 'Sizga ruxsat etilmagan',
      });
    }

    return true;
  }
}
