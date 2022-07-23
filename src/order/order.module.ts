import { Module } from '@nestjs/common';
import { OrderService } from './service/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from 'src/product/product.entity';
import { CartService } from 'src/cart/service/cart.service';
import { CartEntity } from 'src/cart/cart.entity';
import { Users } from 'src/auth/user.entity';
import { ProductService } from 'src/product/service/product.service';
import { OrderController } from './controller/order.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity, Users]),
  ],
  controllers: [OrderController],
  providers: [OrderService, CartService, ProductService],
})
export class OrderModule {}
