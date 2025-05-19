import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICategoryRepository } from 'src/common/utils/interfaces/category.repository.interface';
import { Category } from '../entities/category.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(Category)
    private CategoryRepository: Repository<Category>,
  ) {}

  async create(
    dataCategory: CreateCategoryDto,
  ): Promise<Category | Category[]> {
    const dataCreate = this.CategoryRepository.create(dataCategory);
    await this.CategoryRepository.save(dataCreate);
    return dataCreate;
  }

  async findAll(): Promise<Category[]> {
    return await this.CategoryRepository.find();
  }

  async findOne(id: number): Promise<Category> {
    return await this.CategoryRepository.findOneBy({ id });
  }

  async update(id: number, updateData: UpdateCategoryDto): Promise<boolean> {
    const { affected }: UpdateResult = await this.CategoryRepository.update(
      id,
      updateData,
    );
    return affected !== 0;
  }
  async delete(id: number): Promise<boolean> {
    const { affected }: DeleteResult = await this.CategoryRepository.delete(id);
    return affected !== 0;
  }
}
