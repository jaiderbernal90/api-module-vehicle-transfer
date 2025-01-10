import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from '@/application/dtos/auth/login.dto';
import { JwtService } from '@nestjs/jwt';
import {
  AUTH_REPOSITORY_TOKEN,
  IAuthRepository,
} from '@/domain/ports/repositories/auth.repository.port';
import { UserNotFoundException } from '@/core/exceptions/auth/user-not-found.exception';
import { InvalidCredentialsException } from '@/core/exceptions/auth/invalid-credentials.exception';
import { JWTPayload } from '@/shared/interfaces/jwt-payload';
import { IResponseToken } from '@/shared/interfaces/response-token.interface';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(AUTH_REPOSITORY_TOKEN)
    private readonly authRepository: IAuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(loginDto: LoginDto): Promise<IResponseToken> {
    try {
      const user = await this.authRepository.findUserByEmail(loginDto.email);
      if (!user) {
        throw new UserNotFoundException(loginDto.email);
      }

      const isPasswordValid = await this.authRepository.validatePassword(
        loginDto.password,
        user.password_hash,
      );

      if (!isPasswordValid) {
        throw new InvalidCredentialsException();
      }

      const payload: JWTPayload = {
        sub: user.id,
        email: user.email,
        username: user.username,
      };

      const expiresIn = 4 * 60 * 60;

      return {
        access_token: this.jwtService.sign(payload),
        token_type: 'Bearer',
        expires_in: expiresIn,
      };
    } catch (error) {
      if (
        error instanceof UserNotFoundException ||
        error instanceof InvalidCredentialsException
      ) {
        throw new InvalidCredentialsException();
      }
      throw error;
    }
  }
}
