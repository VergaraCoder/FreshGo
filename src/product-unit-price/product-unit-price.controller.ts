import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductUnitPriceService } from './product-unit-price.service';
import { CreateProductUnitPriceDto } from './dto/create-product-unit-price.dto';
import { UpdateProductUnitPriceDto } from './dto/update-product-unit-price.dto';

@Controller('product-unit-price')
export class ProductUnitPriceController {
  constructor(private readonly productUnitPriceService: ProductUnitPriceService) {}

  @Post()
  create(@Body() createProductUnitPriceDto: CreateProductUnitPriceDto) {
    return this.productUnitPriceService.create(createProductUnitPriceDto);
  }

  @Get()
  findAll() {
    return this.productUnitPriceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productUnitPriceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductUnitPriceDto: UpdateProductUnitPriceDto) {
    return this.productUnitPriceService.update(+id, updateProductUnitPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productUnitPriceService.remove(+id);
  }
}
