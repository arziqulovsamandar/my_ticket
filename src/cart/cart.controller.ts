import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cart } from './models/cart.model';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: 'All Cart' })
  @Get()
  async findAll(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Cart' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cart> {
    return this.cartService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Cart' })
  @Post()
  async create(@Body() createCartDto: CreateCartDto): Promise<Cart> {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({ summary: 'Update Cart' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    return this.cartService.update(id, updateCartDto);
  }

  @ApiOperation({ summary: 'Delete Cart' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.cartService.delete(id);
  }
}
