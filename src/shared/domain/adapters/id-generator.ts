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

  /**
   * Checks if an ID is valid.
   * @param {string} id - The ID to be validated.
   * @returns {boolean} A boolean indicating if the ID is valid.
   */
  public abstract isValid(id: string): boolean;
}
