import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Venue } from './models/venue.model';
import { VenueService } from './venue.service';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { CreateVenueDto } from './dto/create-venue.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('venues')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({ summary: 'All Venue' })
  @Get()
  async findAll(): Promise<Venue[]> {
    return this.venueService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Venue' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Venue> {
    return this.venueService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Venue' })
  @Post()
  async create(@Body() createVenueDto: CreateVenueDto): Promise<Venue> {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({ summary: 'Update Venue' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVenueDto: UpdateVenueDto,
  ): Promise<Venue> {
    return this.venueService.update(+id, updateVenueDto);
  }

  @ApiOperation({ summary: 'Delete Venue' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.venueService.delete(id);
  }
}