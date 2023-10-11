import { DateAdapter } from '@/shared/domain/adapters/date';
import { DateAdapterNative } from '../native';

describe('DateAdapterNative', () => {
  let dateAdapter: DateAdapter;

  beforeEach(() => {
    dateAdapter = new DateAdapterNative();
  });

  it('should be defined', () => {
    expect(dateAdapter).toBeDefined();
    expect(dateAdapter).toBeInstanceOf(DateAdapterNative);
  });

  it('should return a date', () => {
    const date = dateAdapter.now();

    expect(date).toBeInstanceOf(Date);
    expect(date.getTime()).toBeLessThanOrEqual(Date.now());
    expect(date.getTime()).toBeGreaterThanOrEqual(Date.now() - 1000);
  });

  it('should add days to a date', () => {
    const date = new Date(2023, 0, 1, 0, 0, 0, 0);
    const newDate = dateAdapter.addDays(date, 1);
    const expectedDate = new Date(2023, 0, 2, 0, 0, 0, 0);

    expect(newDate).toBeInstanceOf(Date);
    expect(newDate.getTime()).toBe(expectedDate.getTime());
  });

  it('should add hours to a date', () => {
    const date = new Date(2023, 0, 1, 0, 0, 0, 0);
    const newDate = dateAdapter.addHours(date, 1);
    const expectedDate = new Date(2023, 0, 1, 1, 0, 0, 0);

    expect(newDate).toBeInstanceOf(Date);
    expect(newDate.getTime()).toBe(expectedDate.getTime());
  });

  it('should add minutes to a date', () => {
    const date = new Date(2023, 0, 1, 0, 0, 0, 0);
    const newDate = dateAdapter.addMinutes(date, 1);
    const expectedDate = new Date(2023, 0, 1, 0, 1, 0, 0);

    expect(newDate).toBeInstanceOf(Date);
    expect(newDate.getTime()).toBe(expectedDate.getTime());
  });

  it('should subtract days from a date', () => {
    const date = new Date(2023, 0, 2, 0, 0, 0, 0);
    const newDate = dateAdapter.subtractDays(date, 1);
    const expectedDate = new Date(2023, 0, 1, 0, 0, 0, 0);

    expect(newDate).toBeInstanceOf(Date);
    expect(newDate.getTime()).toBe(expectedDate.getTime());
  });

  it('should subtract hours from a date', () => {
    const date = new Date(2023, 0, 1, 1, 0, 0, 0);
    const newDate = dateAdapter.subtractHours(date, 1);
    const expectedDate = new Date(2023, 0, 1, 0, 0, 0, 0);

    expect(newDate).toBeInstanceOf(Date);
    expect(newDate.getTime()).toBe(expectedDate.getTime());
  });

  it('should subtract minutes from a date', () => {
    const date = new Date(2023, 0, 1, 0, 1, 0, 0);
    const newDate = dateAdapter.subtractMinutes(date, 1);
    const expectedDate = new Date(2023, 0, 1, 0, 0, 0, 0);

    expect(newDate).toBeInstanceOf(Date);
    expect(newDate.getTime()).toBe(expectedDate.getTime());
  });

  it('should return the seconds of a date', () => {
    const date = new Date(2023, 0, 1, 0, 0, 0, 0);
    const seconds = dateAdapter.toSeconds(date);
    const expectedSeconds = Math.floor(date.getTime() / 1000);

    expect(seconds).toBe(expectedSeconds);
  });
});
