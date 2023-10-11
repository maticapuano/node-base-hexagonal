import { SharedModule } from '@/shared/shared.module';
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [SharedModule, ProductsModule],
})
export class AppModule {}
