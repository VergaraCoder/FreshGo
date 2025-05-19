import { Inject, Injectable } from '@nestjs/common';
import { CreateProductUnitPriceDto } from './dto/create-product-unit-price.dto';
import { UpdateProductUnitPriceDto } from './dto/update-product-unit-price.dto';
import { CustomHttpException } from 'src/common/error/error.custom';
import { IProductUnitPriceRepository } from 'src/common/utils/interfaces/unit.repo.interface';
import { ProductUnitPrice } from './entities/product-unit-price.entity';
import { Result } from 'src/common/utils/patterResult/patternResult';

@Injectable()
export class ProductUnitPriceService {
  constructor(
    @Inject('UNIT_PRICE_REPO')
    private ProductUnitPriceRepo: IProductUnitPriceRepository,
  ) {}

  async create(createProductUnitPriceDto: CreateProductUnitPriceDto) {
    try {
      return await this.ProductUnitPriceRepo.create(createProductUnitPriceDto);
    } catch (err: any) {
      console.log(err);
    }
  }

  async findAll(): Promise<Result<ProductUnitPrice[]>> {
    const registers: ProductUnitPrice[] =
      await this.ProductUnitPriceRepo.findAll();
    if (registers.length == 0) {
      return {
        data: null,
        error: new CustomHttpException('THERE ARE NOT ProductUnitPriceS', 404),
      };
    }
    return {
      data: registers,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<ProductUnitPrice>> {
    const register: ProductUnitPrice =
      await this.ProductUnitPriceRepo.findOne(id);
    if (!register) {
      return {
        data: null,
        error: new CustomHttpException('ProductUnitPrice NOT FOUND', 404),
      };
    }
    return {
      data: register,
      error: null,
    };
  }

  async update(
    id: number,
    updateProductUnitPriceDto: UpdateProductUnitPriceDto,
  ) {
    const verify: boolean = await this.ProductUnitPriceRepo.update(
      id,
      updateProductUnitPriceDto,
    );
    if (!verify) {
      return {
        data: null,
        error: new CustomHttpException('ProductUnitPrice NOT FOUND', 404),
      };
    }
    return {
      data: true,
      error: null,
    };
  }

  async remove(id: number) {
    const verify: boolean = await this.ProductUnitPriceRepo.delete(id);
    if (!verify) {
      return {
        data: null,
        error: new CustomHttpException('ProductUnitPrice NOT FOUND', 404),
      };
    }
    return {
      data: true,
      error: null,
    };
  }
}
