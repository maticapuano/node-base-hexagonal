import { GetAllProductsUseCase } from '@/modules/products/application/get-all/case';
import { ProductResponse } from '@/modules/products/presentation/product';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller({
  path: '/products',
  version: '1',
})
@ApiTags('products')
export class ProductsController {
  public constructor(private getProductsUseCase: GetAllProductsUseCase) {}

  @Get()
  @ApiOkResponse({ type: [ProductResponse], description: 'Get all products' })
  public async getAll(): Promise<ProductResponse[]> {
    return this.getProductsUseCase.execute();
  }
}
