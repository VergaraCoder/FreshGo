import { Test, TestingModule } from '@nestjs/testing';
import { ProductUnitPriceService } from './product-unit-price.service';

describe('ProductUnitPriceService', () => {
  let service: ProductUnitPriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductUnitPriceService],
    }).compile();

    service = module.get<ProductUnitPriceService>(ProductUnitPriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
