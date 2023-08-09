import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VenuePhoto } from './models/venue_photo.model';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('venue-photos')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @ApiOperation({ summary: 'All Venue_Photo' })
  @Get()
  async findAll(): Promise<VenuePhoto[]> {
    return this.venuePhotoService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Venue_Photo' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<VenuePhoto> {
    return this.venuePhotoService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Venue_Photo' })
  @Post()
  async create(
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
  ): Promise<VenuePhoto> {
    return this.venuePhotoService.create(createVenuePhotoDto);
  }

  @ApiOperation({ summary: 'Update Venue_Photo' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto,
  ): Promise<VenuePhoto> {
    return this.venuePhotoService.update(id, updateVenuePhotoDto);
  }

  @ApiOperation({ summary: 'Delete Venue_Photo' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.venuePhotoService.delete(id);
  }
}
