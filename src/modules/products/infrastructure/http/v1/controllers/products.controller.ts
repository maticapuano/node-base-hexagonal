import { CreateProductUseCase } from '@/modules/products/application/create/case';
import { GetAllProductsUseCase } from '@/modules/products/application/get-all/case';
import { GetProductByIdUseCase } from '@/modules/products/application/get-by-id/case';
import { ProductResponse } from '@/modules/products/presentation/product';
import { IdValidatorPipe } from '@/shared/core/pipes/id-validator.pipe';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductDto } from '../dtos/create-product.dto';

@Controller({
  path: '/products',
  version: '1',
})
@ApiTags('products')
export class ProductsController {
  public constructor(
    private getProductsUseCase: GetAllProductsUseCase,
    private getProductByIdUseCase: GetProductByIdUseCase,
    private createProductUseCase: CreateProductUseCase,
  ) {}

  @Get()
  @ApiOkResponse({ type: [ProductResponse], description: 'Get all products' })
  public async getAll(): Promise<ProductResponse[]> {
    return this.getProductsUseCase.execute();
  }

  @Get('/:id')
  @ApiOkResponse({ type: ProductResponse, description: 'Get product by id' })
  @ApiNotFoundResponse({ description: 'Product not found' })
  @ApiBadRequestResponse({ description: 'Invalid ID' })
  @ApiParam({ name: 'id', type: String, required: true })
  public async getById(@Param('id', IdValidatorPipe) id: string): Promise<ProductResponse> {
    return this.getProductByIdUseCase.execute(id);
  }

  @Post()
  @ApiCreatedResponse({ type: ProductResponse, description: 'Create a new product' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  public async create(@Body() data: CreateProductDto): Promise<ProductResponse> {
    return this.createProductUseCase.execute(data);
  }
}
