import { IdGeneratorAdapter } from '@/shared/domain/adapters/id-generator';
import { randomUUID } from 'crypto';

export class IdGeneratorUuidAdapter extends IdGeneratorAdapter {
  public generate(): string {
    return randomUUID();
  }
}
