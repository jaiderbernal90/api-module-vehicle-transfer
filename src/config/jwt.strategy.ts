import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { CONFIG } from '@/config/constants';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '@/domain/ports/repositories/user.repository.port';
import { JWTPayload } from '@/shared/interfaces/jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private _configSvc: ConfigService,
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly _authRepository: IUserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: _configSvc.get<string>(CONFIG.JWT_SECRET),
    });
  }

  async validate(payload: JWTPayload) {
    const user = await this._authRepository.find(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
