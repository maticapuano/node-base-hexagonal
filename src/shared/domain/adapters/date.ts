/**
 * Provides methods to manipulate dates and times.
 */
export abstract class DateAdapter {
  /**
   * Returns the current date and time.
   * @returns {Date} The current date and time.
   */
  public abstract now(): Date;

  /**
   * Adds the specified number of days to the given date.
   * @param {number} days - The number of days to add.
   * @returns {Date} The resulting date.
   */
  public abstract addDays(date: Date, days: number): Date;

  /**
   * Adds the specified number of hours to the given date.
   * @param {number} hours - The number of hours to add.
   * @returns {Date} The resulting date.
   */
  public abstract addHours(date: Date, hours: number): Date;

  /**
   * Adds the specified number of minutes to the given date.
   * @param {number} minutes - The number of minutes to add.
   * @returns {Date} The resulting date.
   */
  public abstract addMinutes(date: Date, minutes: number): Date;

  /**
   * Subtracts the specified number of days from the given date.
   * @param {number} days - The number of days to subtract.
   * @returns {Date} The resulting date.
   */
  public abstract subtractDays(date: Date, days: number): Date;

  /**
   * Subtracts the specified number of hours from the given date.
   * @param {number} hours - The number of hours to subtract.
   * @returns {Date} The resulting date.
   */
  public abstract subtractHours(date: Date, hours: number): Date;

  /**
   * Subtracts the specified number of minutes from the given date.
   * @param {number} minutes - The number of minutes to subtract.
   * @returns {Date} The resulting date.
   */
  public abstract subtractMinutes(date: Date, minutes: number): Date;

  /**
   * Converts the given date to seconds.
   * @param {Date} date - The date to convert.
   * @returns {number} The number of seconds since January 1, 1970, 00:00:00 UTC.
   */
  public abstract toSeconds(date: Date): number;
}
