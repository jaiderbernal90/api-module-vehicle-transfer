import { LoginDto } from '@/application/dtos/auth/login.dto';
import { LoginUseCase } from '@/application/use-cases/auth/login.use-case';
import { IAuthService } from '@/domain/ports/services/auth.service.port';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    return this.loginUseCase.execute(loginDto);
  }
}
