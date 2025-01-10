import { LoginDto } from '@/application/dtos/auth/login.dto';

export interface IAuthService {
  login(loginDto: LoginDto): Promise<{ access_token: string }>;
}
