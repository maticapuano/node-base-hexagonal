import { IdGeneratorUuidAdapter } from '../uuid';

describe('IdGeneratorUuidAdapter', () => {
  it('should generate a UUID string', () => {
    const idGenerator = new IdGeneratorUuidAdapter();
    const id = idGenerator.generate();

    expect(typeof id).toBe('string');
    expect(id.length).toBe(36);
  });

  it('should validate a UUID string', () => {
    const idGenerator = new IdGeneratorUuidAdapter();
    const id = idGenerator.generate();
    const isValid = idGenerator.isValid(id);

    expect(isValid).toBe(true);
  });

  it('should not validate a non UUID string', () => {
    const idGenerator = new IdGeneratorUuidAdapter();
    const isValid = idGenerator.isValid('non-uuid-string');

    expect(isValid).toBe(false);
  });

  it('should not validate an empty string', () => {
    const idGenerator = new IdGeneratorUuidAdapter();
    const isValid = idGenerator.isValid('');

    expect(isValid).toBe(false);
  });
});
