import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CustomHttpException } from 'src/common/error/error.custom';
import { ICategoryRepository } from 'src/common/utils/interfaces/category.repository.interface';
import { Category } from './entities/category.entity';
import { Result } from 'src/common/utils/patterResult/patternResult';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPO')
    private CategoryRepo: ICategoryRepository,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      return await this.CategoryRepo.create(createCategoryDto);
    } catch (err: any) {
      console.log(err);
    }
  }

  async findAll(): Promise<Result<Category[]>> {
    const registers: Category[] = await this.CategoryRepo.findAll();
    if (registers.length == 0) {
      return {
        data: null,
        error: new CustomHttpException('THERE ARE NOT CategoryS', 404),
      };
    }
    return {
      data: registers,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<Category>> {
    const register: Category = await this.CategoryRepo.findOne(id);
    if (!register) {
      return {
        data: null,
        error: new CustomHttpException('Category NOT FOUND', 404),
      };
    }
    return {
      data: register,
      error: null,
    };
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const verify: boolean = await this.CategoryRepo.update(
      id,
      updateCategoryDto,
    );
    if (!verify) {
      return {
        data: null,
        error: new CustomHttpException('Category NOT FOUND', 404),
      };
    }
    return {
      data: true,
      error: null,
    };
  }

  async remove(id: number) {
    const verify: boolean = await this.CategoryRepo.delete(id);
    if (!verify) {
      return {
        data: null,
        error: new CustomHttpException('Category NOT FOUND', 404),
      };
    }
    return {
      data: true,
      error: null,
    };
  }
}
