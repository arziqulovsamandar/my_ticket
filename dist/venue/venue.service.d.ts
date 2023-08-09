import { Venue } from './models/venue.model';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { CreateVenueDto } from './dto/create-venue.dto';
export declare class VenueService {
    private readonly venueModel;
    constructor(venueModel: typeof Venue);
    findAll(): Promise<Venue[]>;
    findOne(id: string): Promise<Venue>;
    create(createVenueDto: CreateVenueDto): Promise<Venue>;
    update(id: number, updateVenueDto: UpdateVenueDto): Promise<Venue>;
    delete(id: string): Promise<void>;
}
