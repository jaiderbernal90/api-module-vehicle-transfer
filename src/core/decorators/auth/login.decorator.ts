import { applyDecorators, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginDto } from '@/application/dtos/auth/login.dto';

export function LoginDecorator() {
  return applyDecorators(
    Post('login'),
    ApiOperation({ summary: 'Iniciar sesión' }),
    ApiResponse({
      status: 200,
      description: 'Login exitoso',
      type: LoginDto,
    }),
  );
}
