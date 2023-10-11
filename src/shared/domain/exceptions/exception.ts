import { ExceptionCode } from '../enums/exception-code';

type ExceptionResponse = {
  httpCode: number;
  code: ExceptionCode;
  message: string;
  timestamp: Date;
};

export abstract class DomainException extends Error {
  public readonly timestamp: Date;

  public constructor(
    message: string,
    public code: ExceptionCode,
    public statusCode: number,
  ) {
    super(message);

    this.name = this.constructor.name;
    this.timestamp = new Date();
    this.stack = this.stack || new Error().stack;

    Object.setPrototypeOf(this, new.target.prototype);
  }

  public toJSON(): ExceptionResponse {
    return {
      httpCode: this.statusCode,
      code: this.code,
      message: this.message,
      timestamp: this.timestamp,
    };
  }
}
