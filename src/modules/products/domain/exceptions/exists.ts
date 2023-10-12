import { ExceptionCode } from '@/shared/domain/enums/exception-code';
import { Conflict } from '@/shared/domain/exceptions/conflict';

export class ProductAlreadyExists extends Conflict {
  public constructor() {
    super('Product already exists', ExceptionCode.CONFLICT);
  }
}
