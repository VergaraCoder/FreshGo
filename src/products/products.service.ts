import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CustomHttpException } from 'src/common/error/error.custom';
import { Product } from 'src/Products/entities/Product.entity';
import { Result } from 'src/common/utils/patterResult/patternResult';
import { IProductRepository } from 'src/common/utils/interfaces/Product.repository.interface';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPO')
    private ProductRepo: IProductRepository,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.ProductRepo.create(createProductDto);
    } catch (err: any) {
      console.log(err);
    }
  }

  async findAll(): Promise<Result<Product[]>> {
    const registers: Product[] = await this.ProductRepo.findAll();
    if (registers.length == 0) {
      return {
        data: null,
        error: new CustomHttpException('THERE ARE NOT ProductS', 404),
      };
    }
    return {
      data: registers,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<Product>> {
    const register: Product = await this.ProductRepo.findOne(id);
    if (!register) {
      return {
        data: null,
        error: new CustomHttpException('Product NOT FOUND', 404),
      };
    }
    return {
      data: register,
      error: null,
    };
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const verify: boolean = await this.ProductRepo.update(id, updateProductDto);
    if (!verify) {
      return {
        data: null,
        error: new CustomHttpException('Product NOT FOUND', 404),
      };
    }
    return {
      data: true,
      error: null,
    };
  }

  async remove(id: number) {
    const verify: boolean = await this.ProductRepo.delete(id);
    if (!verify) {
      return {
        data: null,
        error: new CustomHttpException('Product NOT FOUND', 404),
      };
    }
    return {
      data: true,
      error: null,
    };
  }
}
