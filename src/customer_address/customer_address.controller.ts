import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerAddress } from './models/customer_address.model';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('customer-addresses')
export class CustomerAddressController {
  constructor(
    private readonly customerAddressService: CustomerAddressService,
  ) {}

  @ApiOperation({ summary: 'All Customer_Address' })
  @Get()
  async findAll(): Promise<CustomerAddress[]> {
    return this.customerAddressService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Customer_Address' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CustomerAddress> {
    return this.customerAddressService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Customer_Address' })
  @Post()
  async create(
    @Body() customerAddressDto: CreateCustomerAddressDto,
  ): Promise<CustomerAddress> {
    return this.customerAddressService.create(customerAddressDto);
  }

  @ApiOperation({ summary: 'Update Customer_Address' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() customerAddressDto: CreateCustomerAddressDto,
  ): Promise<CustomerAddress> {
    return this.customerAddressService.update(id, customerAddressDto);
  }

  @ApiOperation({ summary: 'Delete Customer_Address' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.customerAddressService.delete(id);
  }
}
