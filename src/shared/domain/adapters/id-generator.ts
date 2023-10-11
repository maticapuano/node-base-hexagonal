/**
 * class representing an ID generator adapter.
 * @interface
 */
export abstract class IdGeneratorAdapter {
  /**
   * Generates a unique ID.
   * @returns {string} The generated ID.
   */
  public abstract generate(): string;
}
