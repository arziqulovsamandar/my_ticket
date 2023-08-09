import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SeatType } from './models/seat_type.model';
import { SeatTypeService } from './seat_type.service';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('seat-types')
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @ApiOperation({ summary: 'All Seat_Type' })
  @Get()
  async findAll(): Promise<SeatType[]> {
    return this.seatTypeService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Seat_Type' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<SeatType> {
    return this.seatTypeService.findOne(id);
  }

  @ApiOperation({ summary: 'CReate Seat_Type' })
  @Post()
  async create(
    @Body() createSeatTypeDto: CreateSeatTypeDto,
  ): Promise<SeatType> {
    return this.seatTypeService.create(createSeatTypeDto);
  }

  @ApiOperation({ summary: 'Update Seat_Type' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto,
  ): Promise<SeatType> {
    return this.seatTypeService.update(id, updateSeatTypeDto);
  }

  @ApiOperation({ summary: 'Delete Seat_Type' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.seatTypeService.delete(id);
  }
}
