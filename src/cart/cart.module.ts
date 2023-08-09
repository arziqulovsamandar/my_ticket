import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { CartService } from './cart.service';
import { Ticket } from '../ticket/models/ticket.model';
import { Customer } from '../customer/models/customer.model';
import { CartController } from './cart.controller';

@Module({
  imports: [SequelizeModule.forFeature([Cart, Ticket, Customer])],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
