import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateProductUnitPriceDto } from '../dto/create-product-unit-price.dto';
import { UpdateProductUnitPriceDto } from '../dto/update-product-unit-price.dto';
import { IProductUnitPriceRepository } from 'src/common/utils/interfaces/unit.repo.interface';
import { ProductUnitPrice } from '../entities/product-unit-price.entity';

@Injectable()
export class ProductUnitPriceRepository implements IProductUnitPriceRepository {
  constructor(
    @InjectRepository(ProductUnitPrice)
    private ProductUnitPriceRepository: Repository<ProductUnitPrice>,
  ) {}

  async create(
    data: CreateProductUnitPriceDto,
  ): Promise<ProductUnitPrice | ProductUnitPrice[]> {
    const dataCreate = this.ProductUnitPriceRepository.create(data);
    await this.ProductUnitPriceRepository.save(dataCreate);
    return dataCreate;
  }

  async findAll(): Promise<ProductUnitPrice[]> {
    return await this.ProductUnitPriceRepository.find();
  }

  async findOne(id: number): Promise<ProductUnitPrice> {
    return await this.ProductUnitPriceRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateData: UpdateProductUnitPriceDto,
  ): Promise<boolean> {
    const { affected }: UpdateResult =
      await this.ProductUnitPriceRepository.update(id, updateData);
    return affected !== 0;
  }
  async delete(id: number): Promise<boolean> {
    const { affected }: DeleteResult =
      await this.ProductUnitPriceRepository.delete(id);
    return affected !== 0;
  }
}
