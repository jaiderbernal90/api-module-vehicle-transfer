import { LoginDto } from '@/application/dtos/auth/login.dto';
import { IAuthService } from '@/domain/ports/services/auth.service.port';
import { Body, Controller, Inject, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('IAuthService')
    private readonly authService: IAuthService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
