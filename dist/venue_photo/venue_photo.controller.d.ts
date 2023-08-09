import { VenuePhoto } from './models/venue_photo.model';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
export declare class VenuePhotoController {
    private readonly venuePhotoService;
    constructor(venuePhotoService: VenuePhotoService);
    findAll(): Promise<VenuePhoto[]>;
    findOne(id: number): Promise<VenuePhoto>;
    create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto>;
    update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<VenuePhoto>;
    delete(id: number): Promise<void>;
}
