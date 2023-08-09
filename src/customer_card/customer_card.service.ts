import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerCard } from './models/customer_card.model';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard)
    private readonly customerCardModel: typeof CustomerCard,
  ) {}

  async findAll(): Promise<CustomerCard[]> {
    return this.customerCardModel.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number): Promise<CustomerCard> {
    return this.customerCardModel.findByPk(id);
  }

  async create(
    createCustomerCardDto: CreateCustomerCardDto,
  ): Promise<CustomerCard> {
    return this.customerCardModel.create(createCustomerCardDto);
  }

  async update(
    id: number,
    updateCustomerCardDto: UpdateCustomerCardDto,
  ): Promise<CustomerCard> {
    const builder = await this.customerCardModel.update(updateCustomerCardDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.customerCardModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete customer card with id ${id}`);
    }
  }
}
