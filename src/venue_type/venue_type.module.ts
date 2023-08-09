import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';
import { VenueTypeService } from './venue_type.service';
import { Venue } from '../venue/models/venue.model';
import { VenueTypeController } from './venue_type.controller';

@Module({
  imports: [SequelizeModule.forFeature([VenueType, Venue])],
  controllers: [VenueTypeController],
  providers: [VenueTypeService],
  exports: [VenueTypeService],
})
export class VenueTypeModule {}
