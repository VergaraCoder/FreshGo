import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/category/dto/update-category.dto';
import { Category } from 'src/category/entities/category.entity';

export interface ICategoryRepository {
  create(dataCategory: CreateCategoryDto): Promise<Category | Category[]>;
  findAll(): Promise<Category[]>;
  findOne(id: number): Promise<Category>;
  update(id: number, updateData: UpdateCategoryDto): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
