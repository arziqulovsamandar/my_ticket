import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue_photo.model';
import { VenuePhotoService } from './venue_photo.service';
import { Venue } from '../venue/models/venue.model';
import { VenuePhotoController } from './venue_photo.controller';

@Module({
  imports: [SequelizeModule.forFeature([VenuePhoto, Venue])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
  exports: [VenuePhotoService],
})
export class VenuePhotoModule {}
