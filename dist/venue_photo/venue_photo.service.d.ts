import { VenuePhoto } from './models/venue_photo.model';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
export declare class VenuePhotoService {
    private readonly venuePhotoModel;
    constructor(venuePhotoModel: typeof VenuePhoto);
    findAll(): Promise<VenuePhoto[]>;
    findOne(id: number): Promise<VenuePhoto>;
    create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto>;
    update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<VenuePhoto>;
    delete(id: number): Promise<void>;
}
