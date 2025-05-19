import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DbConfig } from './common/db/db.config';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { ProductUnitPriceModule } from './product-unit-price/product-unit-price.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DbConfig,
    }),
    ProductsModule,
    CategoryModule,
    ProductUnitPriceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
