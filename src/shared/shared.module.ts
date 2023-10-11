import { Global, Module } from '@nestjs/common';
import { DateAdapter } from './domain/adapters/date';
import { IdGeneratorAdapter } from './domain/adapters/id-generator';
import { DateAdapterNative } from './infrastructure/adapters/date/implementations/native';
import { IdGeneratorUuidAdapter } from './infrastructure/adapters/id-generator/implementations/uuid';

@Global()
@Module({
  providers: [
    {
      provide: DateAdapter,
      useClass: DateAdapterNative,
    },
    {
      provide: IdGeneratorAdapter,
      useClass: IdGeneratorUuidAdapter,
    },
  ],
  exports: [DateAdapter, IdGeneratorAdapter],
})
export class SharedModule {}
