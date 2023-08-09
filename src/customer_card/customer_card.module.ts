import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerCard } from './models/customer_card.model';
import { CustomerCardService } from './customer_card.service';
import { Customer } from '../customer/models/customer.model';
import { CustomerCardController } from './customer_card.controller';

@Module({
  imports: [SequelizeModule.forFeature([CustomerCard, Customer])],
  controllers: [CustomerCardController],
  providers: [CustomerCardService],
  exports: [CustomerCardService],
})
export class CustomerCardModule {}
