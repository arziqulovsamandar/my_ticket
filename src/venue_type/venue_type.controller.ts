import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VenueType } from './models/venue_type.model';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('venue-types')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({ summary: 'All Venue_Type' })
  @Get()
  async findAll(): Promise<VenueType[]> {
    return this.venueTypeService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Venue_Type' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<VenueType> {
    return this.venueTypeService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Venue_Type' })
  @Post()
  async create(
    @Body() createVenueTypeDto: CreateVenueTypeDto,
  ): Promise<VenueType> {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @ApiOperation({ summary: 'Update Venue_Type' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTypeDto: UpdateVenueTypeDto,
  ): Promise<VenueType> {
    return this.venueTypeService.update(id, updateTypeDto);
  }

  @ApiOperation({ summary: 'Delete Venue_Type' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    
    return this.venueTypeService.delete(id);
  }
}
