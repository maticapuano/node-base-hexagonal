import { Module } from '@nestjs/common';
import { ProductRepository } from './domain/repositories/product.repository';
import { ProductMemoryRepository } from './infrastructure/persistence/memory/repositories/product.repository';

@Module({
  providers: [
    {
      provide: ProductRepository,
      useClass: ProductMemoryRepository,
    },
  ],
  exports: [ProductRepository],
})
export class ProductsModule {}
