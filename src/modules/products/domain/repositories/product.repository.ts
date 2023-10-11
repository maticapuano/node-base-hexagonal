import { Nullable } from '@/shared/domain/contracts/nullable';
import { CreateProduct, Product } from '../contracts/product';

export abstract class ProductRepository {
  public abstract getAll(): Promise<Product[]>;
  public abstract getById(id: string): Promise<Nullable<Product>>;
  public abstract create(data: CreateProduct): Promise<Product>;
}
