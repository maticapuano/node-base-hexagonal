import { IdGeneratorUuidAdapter } from '../uuid';

describe('IdGeneratorUuidAdapter', () => {
  it('should generate a UUID string', () => {
    const idGenerator = new IdGeneratorUuidAdapter();
    const id = idGenerator.generate();

    expect(typeof id).toBe('string');
    expect(id.length).toBe(36);
  });
});
