import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Booking } from './models/booking.model';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: 'All Booking' })
  @Get()
  async findAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Booking' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Booking> {
    return this.bookingService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Booking' })
  @Post()
  async create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: 'Update Booking' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    return this.bookingService.update(id, updateBookingDto);
  }

  @ApiOperation({ summary: 'Delete Booking' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.bookingService.delete(id);
  }
}
