import { ExceptionCode } from '@/shared/domain/enums/exception-code';
import { NotFound } from '@/shared/domain/exceptions/not-found';

export class ProductNotFound extends NotFound {
  public constructor() {
    super('Product not found', ExceptionCode.NOT_FOUND);
  }
}
