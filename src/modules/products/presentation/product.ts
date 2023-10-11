import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../domain/contracts/product';

export class ProductResponse {
  @ApiProperty({ format: 'uuid' })
  public id: string;

  @ApiProperty({ example: 'Iphone 12' })
  public name: string;

  @ApiProperty({ example: 1000 })
  public price: number;

  public static fromDomain(product: Product): ProductResponse {
    const response = new ProductResponse();

    response.id = product.id;
    response.name = product.name;
    response.price = product.price;

    return response;
  }

  public static fromDomainArray(products: Product[]): ProductResponse[] {
    return products.map((product) => ProductResponse.fromDomain(product));
  }
}
