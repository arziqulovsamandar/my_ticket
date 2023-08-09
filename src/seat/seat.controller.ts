import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Seat } from './models/seat.model';
import { SeatService } from './seat.service';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { CreateSeatDto } from './dto/create-seat.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('seats')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({ summary: 'All Seat' })
  @Get()
  async findAll(): Promise<Seat[]> {
    return this.seatService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Seat' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Seat> {
    return this.seatService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Seat' })
  @Post()
  async create(@Body() createSetDto: CreateSeatDto): Promise<Seat> {
    return this.seatService.create(createSetDto);
  }

  @ApiOperation({ summary: 'Update Seat' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSeatDto: UpdateSeatDto,
  ): Promise<Seat> {
    return this.seatService.update(id, updateSeatDto);
  }

  @ApiOperation({ summary: 'Delete Seat' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.seatService.delete(id);
  }
}
