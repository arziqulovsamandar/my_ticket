import { CreateVenuePhotoDto } from './create-venue_photo.dto';
declare const UpdateVenuePhotoDto_base: import("@nestjs/common").Type<Partial<CreateVenuePhotoDto>>;
export declare class UpdateVenuePhotoDto extends UpdateVenuePhotoDto_base {
    venue_id?: number;
    url?: string;
}
export {};
