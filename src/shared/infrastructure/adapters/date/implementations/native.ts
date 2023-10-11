import { DateAdapter } from '@/shared/domain/adapters/date';

export class DateAdapterNative extends DateAdapter {
  public constructor() {
    super();
  }

  public now(): Date {
    return new Date();
  }

  public addDays(days: number): Date {
    const date = this.now();

    date.setDate(date.getDate() + days);

    return date;
  }

  public addHours(hours: number): Date {
    const date = this.now();

    date.setHours(date.getHours() + hours);

    return date;
  }

  public addMinutes(minutes: number): Date {
    const date = this.now();

    date.setMinutes(date.getMinutes() + minutes);

    return date;
  }

  public subtractDays(days: number): Date {
    const date = this.now();

    date.setDate(date.getDate() - days);

    return date;
  }

  public subtractHours(hours: number): Date {
    const date = this.now();

    date.setHours(date.getHours() - hours);

    return date;
  }

  public subtractMinutes(minutes: number): Date {
    const date = this.now();

    date.setMinutes(date.getMinutes() - minutes);

    return date;
  }

  public toSeconds(date: Date): number {
    return Math.floor(date.getTime() / 1000);
  }
}
