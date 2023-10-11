import { ExceptionCode } from '@/shared/domain/enums/exception-code';
import { HttpStatusCode } from '@/shared/domain/enums/status-code';
import { DomainException } from '@/shared/domain/exceptions/exception';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: unknown, host: ArgumentsHost): Response {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof DomainException) {
      return response.status(exception.statusCode).json({
        code: exception.code,
        status: exception.statusCode,
        message: exception.message,
        errors: [],
      });
    }

    if (exception instanceof HttpException) {
      return this.handleHttpException(exception, response);
    }

    Logger.error(exception);

    return this.handleUnknownException(response);
  }

  private handleUnknownException(response: Response): Response {
    return response.status(HttpStatusCode.INTERNAL_SERVER).json({
      code: ExceptionCode.UNKNOWN,
      status: HttpStatusCode.INTERNAL_SERVER,
      message: 'An unexpected error has occurred',
      errors: [],
    });
  }

  private handleHttpException(exception: HttpException, response: Response): Response {
    if (typeof exception.message === 'string') {
      if (exception.message.startsWith('Unexpected token')) {
        return this.handleInvalidJson(exception, response);
      }
    }

    if (exception.getStatus() === HttpStatusCode.UNPROCESSABLE_ENTITY) {
      return this.handleUnprocessableEntity(exception, response);
    }

    return response.status(exception.getStatus()).json({
      code: ExceptionCode.UNKNOWN,
      status: exception.getStatus(),
      message: exception.message,
      errors: [],
    });
  }

  private handleUnprocessableEntity(exception: HttpException, response: Response): Response {
    const exceptionResponse = exception.getResponse() as Record<string, unknown>;
    const errors: string[] = Array.isArray(exceptionResponse.message)
      ? exceptionResponse.message
      : [exceptionResponse.message];

    return response.status(exception.getStatus()).json({
      code: ExceptionCode.VALIDATION_FAILED,
      status: exception.getStatus(),
      message: 'Sorry, we could not process your request',
      errors,
    });
  }

  private handleInvalidJson(exception: HttpException, response: Response): Response {
    return response.status(exception.getStatus()).json({
      code: ExceptionCode.INVALID_JSON,
      status: exception.getStatus(),
      message: 'The JSON sent is invalid',
      errors: [],
    });
  }
}
