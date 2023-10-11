import { Case } from '@/shared/domain/contracts/case';
import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { ProductResponse } from '../../presentation/product';

@Injectable()
export class GetAllProductsUseCase implements Case<void, ProductResponse[]> {
  public constructor(private productRepository: ProductRepository) {}

  public async execute(): Promise<ProductResponse[]> {
    const products = await this.productRepository.getAll();

    return ProductResponse.fromDomainArray(products);
  }
}
