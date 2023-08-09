import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerCard } from './models/customer_card.model';
import { CustomerCardService } from './customer_card.service';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('customer-cards')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation({ summary: 'All Customer_Card' })
  @Get()
  async findAll(): Promise<CustomerCard[]> {
    return this.customerCardService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Customer_Card' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CustomerCard> {
    return this.customerCardService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Customer_Card' })
  @Post()
  async create(
    @Body() createCustomerCardDto: CreateCustomerCardDto,
  ): Promise<CustomerCard> {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({ summary: 'Update Customer_Card' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto,
  ): Promise<CustomerCard> {
    return this.customerCardService.update(id, updateCustomerCardDto);
  }

  @ApiOperation({ summary: 'Delete Customer_Card' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.customerCardService.delete(id);
  }
}
