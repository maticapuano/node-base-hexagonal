import { Module } from '@nestjs/common';
import { GetAllProductsUseCase } from './application/get-all/case';
import { ProductRepository } from './domain/repositories/product.repository';
import { ProductsController } from './infrastructure/http/v1/controllers/products.controller';
import { ProductMemoryRepository } from './infrastructure/persistence/memory/repositories/product.repository';

@Module({
  providers: [
    {
      provide: ProductRepository,
      useClass: ProductMemoryRepository,
    },
    GetAllProductsUseCase,
  ],
  controllers: [ProductsController],
  exports: [ProductRepository],
})
export class ProductsModule {}
