import { DateAdapter } from '@/shared/domain/adapters/date';

export class DateAdapterNative extends DateAdapter {
  public constructor() {
    super();
  }

  public now(): Date {
    return new Date();
  }

  public addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);

    return date;
  }

  public addHours(date: Date, hours: number): Date {
    date.setHours(date.getHours() + hours);

    return date;
  }

  public addMinutes(date: Date, minutes: number): Date {
    date.setMinutes(date.getMinutes() + minutes);

    return date;
  }

  public subtractDays(date: Date, days: number): Date {
    date.setDate(date.getDate() - days);

    return date;
  }

  public subtractHours(date: Date, hours: number): Date {
    date.setHours(date.getHours() - hours);

    return date;
  }

  public subtractMinutes(date: Date, minutes: number): Date {
    date.setMinutes(date.getMinutes() - minutes);

    return date;
  }

  public toSeconds(date: Date): number {
    return Math.floor(date.getTime() / 1000);
  }
}
