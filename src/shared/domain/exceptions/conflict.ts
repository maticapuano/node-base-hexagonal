import { ExceptionCode } from '../enums/exception-code';
import { HttpStatusCode } from '../enums/status-code';
import { DomainException } from './exception';

export class Conflict extends DomainException {
  public constructor(message: string, code: ExceptionCode) {
    super(message, code, HttpStatusCode.CONFLICT);
  }
}
