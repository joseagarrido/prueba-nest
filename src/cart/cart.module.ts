import { Module } from '@nestjs/common';
import { CartService } from './service/cart.service';
import { CartEntity } from './cart.entity';
import { ProductService } from 'src/product/service/product.service';
import { ProductEntity } from 'src/product/product.entity';
import { Users } from 'src/auth/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CartService, ProductService],
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, Users])],
})
export class CartModule {}
