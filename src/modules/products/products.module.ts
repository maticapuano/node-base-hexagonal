import { Module } from '@nestjs/common';
import { GetAllProductsUseCase } from './application/get-all/case';
import { GetProductByIdUseCase } from './application/get-by-id/case';
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
    GetProductByIdUseCase,
  ],
  controllers: [ProductsController],
  exports: [ProductRepository],
})
export class ProductsModule {}
