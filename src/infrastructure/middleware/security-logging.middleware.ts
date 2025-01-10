import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SecurityLoggingMiddleware implements NestMiddleware {
  private logger = new Logger('SecurityMiddleware');

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, url, ip } = req;

    this.logger.log(`Request ${method} ${url} from IP ${ip}`);

    next();
  }
}
