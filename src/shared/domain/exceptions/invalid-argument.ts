import { ExceptionCode } from '../enums/exception-code';
import { BadRequest } from './bad-request';

export class InvalidArgument extends BadRequest {
  public constructor(message: string) {
    super(message, ExceptionCode.INVALID_ARGUMENT);
  }
}
