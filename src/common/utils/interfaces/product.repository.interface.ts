import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { Product } from 'src/products/entities/product.entity';

export interface IProductRepository {
  create(dataProduct: CreateProductDto): Promise<Product | Product[]>;
  findAll(): Promise<Product[]>;
  findOne(id: number): Promise<Product>;
  update(id: number, updateData: UpdateProductDto): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
