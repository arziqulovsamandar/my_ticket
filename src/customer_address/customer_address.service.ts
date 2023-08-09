import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAddress } from './models/customer_address.model';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress)
    private readonly customerAddressModel: typeof CustomerAddress,
  ) {}

  async findAll(): Promise<CustomerAddress[]> {
    return this.customerAddressModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<CustomerAddress> {
    return this.customerAddressModel.findByPk(id);
  }

  async create(
    customerAddress: CreateCustomerAddressDto,
  ): Promise<CustomerAddress> {
    return this.customerAddressModel.create(customerAddress);
  }

  async update(
    id: number,
    updateCustomerAddressDto: UpdateCustomerAddressDto,
  ): Promise<CustomerAddress> {
    const builder = await this.customerAddressModel.update(updateCustomerAddressDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.customerAddressModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete customer address with id ${id}`);
    }
  }
}
