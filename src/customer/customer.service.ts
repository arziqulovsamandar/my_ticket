import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: typeof Customer,
  ) {}

  async findAll(): Promise<Customer[]> {
    return this.customerModel.findAll();
  }

  async findOne(id: number): Promise<Customer> {
    return this.customerModel.findByPk(id);
  }

  async create(createcustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customerModel.create(createcustomerDto);
  }

  async update(id: number, updatecustomerDto: UpdateCustomerDto): Promise<Customer> {
    const builder = await this.customerModel.update(updatecustomerDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.customerModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete customer with id ${id}`);
    }
  }
}
