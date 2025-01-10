import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { BaseException } from '@/core/exceptions/base.exception';

@Catch()
export class TransferExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let errorResponse = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
      timestamp: new Date().toISOString(),
      details: null,
      path: ctx.getRequest().url,
    };

    if (exception instanceof BaseException) {
      errorResponse = {
        ...errorResponse,
        statusCode: exception.statusCode,
        message: exception.message,
        details: exception.details,
      };
    } else if (exception instanceof HttpException) {
      errorResponse = {
        ...errorResponse,
        statusCode: exception.getStatus(),
        message: exception.message,
      };
    }

    response.status(errorResponse.statusCode).json(errorResponse);
  }
}
