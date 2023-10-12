import { Case } from '@/shared/domain/contracts/case';
import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/contracts/product';
import { ProductNotFound } from '../../domain/exceptions/not-found';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { ProductResponse } from '../../presentation/product';

@Injectable()
export class GetProductByIdUseCase implements Case<string, ProductResponse> {
  public constructor(private productRepository: ProductRepository) {}

  public async execute(id: string): Promise<Product> {
    const product = await this.productRepository.getById(id);

    if (!product) {
      throw new ProductNotFound();
    }

    return ProductResponse.fromDomain(product);
  }
}
