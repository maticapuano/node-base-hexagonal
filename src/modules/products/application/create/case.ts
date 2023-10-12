import { Case } from '@/shared/domain/contracts/case';
import { Injectable } from '@nestjs/common';
import { ProductAlreadyExists } from '../../domain/exceptions/exists';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { ProductResponse } from '../../presentation/product';
import { CreateProductInput } from './input';

@Injectable()
export class CreateProductUseCase implements Case<CreateProductInput, ProductResponse> {
  public constructor(private productRepository: ProductRepository) {}

  public async execute(data: CreateProductInput): Promise<ProductResponse> {
    const exists = await this.productRepository.exists(data.name);

    if (exists) {
      throw new ProductAlreadyExists();
    }

    const product = await this.productRepository.create(data);

    return ProductResponse.fromDomain(product);
  }
}
