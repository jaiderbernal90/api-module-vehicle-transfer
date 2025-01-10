import { LoginDto } from '@/application/dtos/auth/login.dto';
import { HttpExceptionFilter } from '@/core/interceptors/http-exception.interceptor';
import {
  AUTH_SERVICE_TOKEN,
  IAuthService,
} from '@/domain/ports/services/auth.service.port';
import { Body, Controller, Inject, Post, UseFilters } from '@nestjs/common';

@UseFilters(HttpExceptionFilter)
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN)
    private readonly authService: IAuthService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
