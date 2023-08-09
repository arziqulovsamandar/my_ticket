import { PartialType } from '@nestjs/swagger';
import { CreateVenuePhotoDto } from './create-venue_photo.dto';

export class UpdateVenuePhotoDto extends PartialType(CreateVenuePhotoDto) {
  venue_id?: number;
  url?: string;
}
