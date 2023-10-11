import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, catchError, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<void> {
    const startTime = Date.now();

    return next.handle().pipe(
      tap(() => {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;

        this.logRequest(context, elapsedTime);
      }),
      catchError(error => {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;

        this.logRequest(context, elapsedTime);

        throw error;
      }),
    );
  }

  private logRequest(context: ExecutionContext, elapsedTime: number): void {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    const methodField = `\x1b[34m${method}\x1b[0m`;
    const urlField = `\x1b[35m${url}\x1b[0m`;
    const timeField = `\x1b[36m${elapsedTime}\x1b[0m`;
    const log = `${methodField} ${urlField} ${timeField}ms`;

    Logger.debug(log, context.getClass().name);
  }
}
