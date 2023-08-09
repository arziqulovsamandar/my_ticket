import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart)
    private readonly cartModel: typeof Cart,
  ) {}

  async findAll(): Promise<Cart[]> {
    return this.cartModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Cart> {
    return this.cartModel.findByPk(id);
  }

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    return this.cartModel.create(createCartDto);
  }

  async update(
    id: number,
    updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    const builder = await this.cartModel.update(updateCartDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.cartModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete cart with id ${id}`);
    }
  }
}

