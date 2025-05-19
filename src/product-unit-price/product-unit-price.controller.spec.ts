import { Test, TestingModule } from '@nestjs/testing';
import { ProductUnitPriceController } from './product-unit-price.controller';
import { ProductUnitPriceService } from './product-unit-price.service';

describe('ProductUnitPriceController', () => {
  let controller: ProductUnitPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductUnitPriceController],
      providers: [ProductUnitPriceService],
    }).compile();

    controller = module.get<ProductUnitPriceController>(ProductUnitPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
