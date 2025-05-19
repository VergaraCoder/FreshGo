import { Product } from 'src/Products/entities/Product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_unit_prices')
export class ProductUnitPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.productunitprice, {
    onDelete: 'CASCADE',
  })
  product: Product;

//   @ManyToOne(() => UnitMeasure, (unit) => unit.productUnitPrices, {
//     onDelete: 'CASCADE',
//   })
//   unitMeasure: UnitMeasure;

  @Column()
  price: number;
}
