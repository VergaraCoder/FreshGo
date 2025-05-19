import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/Product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { IProductRepository } from 'src/common/utils/interfaces/Product.repository.interface';
import { CreateProductDto } from '../dto/create-Product.dto';
import { UpdateProductDto } from '../dto/update-Product.dto';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private ProductRepository: Repository<Product>,
  ) {}

  async create(data: CreateProductDto): Promise<Product | Product[]> {
    const dataCreate = this.ProductRepository.create(data);
    await this.ProductRepository.save(dataCreate);
    return dataCreate;
  }

  async findAll(): Promise<Product[]> {
    return await this.ProductRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.ProductRepository.findOneBy({ id });
  }

  async update(id: number, updateData: UpdateProductDto): Promise<boolean> {
    const { affected }: UpdateResult = await this.ProductRepository.update(
      id,
      updateData,
    );
    return affected !== 0;
  }
  async delete(id: number): Promise<boolean> {
    const { affected }: DeleteResult = await this.ProductRepository.delete(id);
    return affected !== 0;
  }
}
