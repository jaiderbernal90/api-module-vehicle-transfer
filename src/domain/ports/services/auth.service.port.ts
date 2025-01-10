import { LoginDto } from '@/application/dtos/auth/login.dto';
import { IResponseToken } from '@/shared/interfaces/response-token.interface';

export const AUTH_SERVICE_TOKEN = 'AUTH_SERVICE_TOKEN';

export interface IAuthService {
  login(loginDto: LoginDto): Promise<IResponseToken>;
}
