import { Category } from 'src/category/entities/category.entity';
import { ProductUnitPrice } from 'src/product-unit-price/entities/product-unit-price.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  category_id: string;

  @Column()
  created_at: Date;

  @ManyToOne(() => Category, (category) => category)
  category: Category;

  @OneToMany(
    () => ProductUnitPrice,
    (productunitprice) => productunitprice.product,
  )
  productunitprice: ProductUnitPrice[];
}
