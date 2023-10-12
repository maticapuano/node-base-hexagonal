import { IdGeneratorAdapter } from '@/shared/domain/adapters/id-generator';
import { InvalidArgument } from '@/shared/domain/exceptions/invalid-argument';
import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IdValidatorPipe implements PipeTransform {
  public constructor(private idGeneratorAdapter: IdGeneratorAdapter) {}

  public transform(value: string): string {
    if (!this.idGeneratorAdapter.isValid(value)) {
      throw new InvalidArgument('Sorry, the provided ID is invalid.');
    }

    return value;
  }
}
