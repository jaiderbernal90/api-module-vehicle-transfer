import { LoginDto } from '@/application/dtos/auth/login.dto';
import { LoginDecorator } from '@/core/decorators/auth/login.decorator';
import { HttpExceptionFilter } from '@/core/interceptors/http-exception.interceptor';
import {
  AUTH_SERVICE_TOKEN,
  IAuthService,
} from '@/domain/ports/services/auth.service.port';
import { Body, Controller, Inject, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('auth')
@UseFilters(HttpExceptionFilter)
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN)
    private readonly authService: IAuthService,
  ) {}

  @LoginDecorator()
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
