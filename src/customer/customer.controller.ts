import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Customer } from './models/customer.model';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: 'All Customer' })
  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Customer' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Customer> {
    return this.customerService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Customer' })
  @Post()
  async create(
    @Body() createcustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.create(createcustomerDto);
  }

  @ApiOperation({ summary: 'Update Customer' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatecustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.update(id, updatecustomerDto);
  }

  @ApiOperation({ summary: 'Delete Customer' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.customerService.delete(id);
  }
}
