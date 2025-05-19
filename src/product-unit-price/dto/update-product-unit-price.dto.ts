import { PartialType } from '@nestjs/mapped-types';
import { CreateProductUnitPriceDto } from './create-product-unit-price.dto';

export class UpdateProductUnitPriceDto extends PartialType(CreateProductUnitPriceDto) {}
