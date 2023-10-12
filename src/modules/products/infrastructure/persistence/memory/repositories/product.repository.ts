import { CreateProduct, Product } from '@/modules/products/domain/contracts/product';
import { ProductRepository } from '@/modules/products/domain/repositories/product.repository';
import { IdGeneratorAdapter } from '@/shared/domain/adapters/id-generator';
import { Nullable } from '@/shared/domain/contracts/nullable';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductMemoryRepository extends ProductRepository {
  private products: Product[];

  public constructor(private idGeneratorAdapter: IdGeneratorAdapter) {
    super();

    this.products = [];
  }

  public getAll(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }

  public getById(id: string): Promise<Nullable<Product>> {
    const product = this.products.find(({ id: productId }) => productId === id);

    return Promise.resolve(product ?? null);
  }

  public async exists(name: string): Promise<boolean> {
    const product = await this.products.find(({ name: productName }) => productName === name);

    return Promise.resolve(!!product);
  }

  public create(data: CreateProduct): Promise<Product> {
    const product: Product = {
      id: this.idGeneratorAdapter.generate(),
      ...data,
    };

    this.products.push(product);

    return Promise.resolve(product);
  }
}
