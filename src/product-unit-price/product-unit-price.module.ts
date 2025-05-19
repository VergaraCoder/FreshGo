import { Module } from '@nestjs/common';
import { ProductUnitPriceService } from './product-unit-price.service';
import { ProductUnitPriceController } from './product-unit-price.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductUnitPrice } from './entities/product-unit-price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductUnitPrice])],
  controllers: [ProductUnitPriceController],
  providers: [
    ProductUnitPriceService,
    {
      provide: 'UNIT_PRICE_REPO',
      useClass: ProductUnitPriceService,
    },
  ],
  exports: [TypeOrmModule, ProductUnitPriceService],
})
export class ProductUnitPriceModule {}
