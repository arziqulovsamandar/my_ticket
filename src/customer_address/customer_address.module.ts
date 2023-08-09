import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerAddress } from './models/customer_address.model';
import { CustomerAddressService } from './customer_address.service';
import { Customer } from '../customer/models/customer.model';
import { CustomerAddressController } from './customer_address.controller';

@Module({
  imports: [SequelizeModule.forFeature([CustomerAddress, Customer])],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
  exports: [CustomerAddressService],
})
export class CustomerAddressModule {}
