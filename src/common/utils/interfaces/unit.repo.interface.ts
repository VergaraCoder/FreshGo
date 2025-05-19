import { CreateProductUnitPriceDto } from 'src/product-unit-price/dto/create-product-unit-price.dto';
import { UpdateProductUnitPriceDto } from 'src/product-unit-price/dto/update-product-unit-price.dto';
import { ProductUnitPrice } from 'src/product-unit-price/entities/product-unit-price.entity';

export interface IProductUnitPriceRepository {
  create(
    dataIProductUnitPriceRepository: CreateProductUnitPriceDto,
  ): Promise<ProductUnitPrice | ProductUnitPrice[]>;
  findAll(): Promise<ProductUnitPrice[]>;
  findOne(id: number): Promise<ProductUnitPrice>;
  update(id: number, updateData: UpdateProductUnitPriceDto): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
