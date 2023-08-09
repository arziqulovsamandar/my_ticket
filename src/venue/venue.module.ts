import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';
import { VenueService} from './venue.service';
import { VenueType } from '../venue_type/models/venue_type.model';
import { VenueController } from './venue.controller';

@Module({
  imports: [SequelizeModule.forFeature([Venue, VenueType])],
  controllers: [VenueController],
  providers: [VenueService],
  exports: [VenueService],
})
export class VenueModule {}
