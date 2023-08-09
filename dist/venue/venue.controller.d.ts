import { Venue } from './models/venue.model';
import { VenueService } from './venue.service';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { CreateVenueDto } from './dto/create-venue.dto';
export declare class VenueController {
    private readonly venueService;
    constructor(venueService: VenueService);
    findAll(): Promise<Venue[]>;
    findOne(id: string): Promise<Venue>;
    create(createVenueDto: CreateVenueDto): Promise<Venue>;
    update(id: string, updateVenueDto: UpdateVenueDto): Promise<Venue>;
    delete(id: string): Promise<void>;
}
