import { IdGeneratorAdapter } from '@/shared/domain/adapters/id-generator';
import { randomUUID } from 'crypto';

export class IdGeneratorUuidAdapter extends IdGeneratorAdapter {
  public generate(): string {
    return randomUUID();
  }

  public isValid(id: string): boolean {
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

    return regex.test(id);
  }
}
