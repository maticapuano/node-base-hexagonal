import { Module } from '@nestjs/common';
import { DateAdapter } from './domain/adapters/date';
import { DateAdapterNative } from './infrastructure/adapters/date/implementations/native';

@Module({
  providers: [
    {
      provide: DateAdapter,
      useClass: DateAdapterNative,
    },
  ],
  exports: [DateAdapter],
})
export class SharedModule {}
