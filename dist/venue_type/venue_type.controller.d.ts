import { VenueType } from './models/venue_type.model';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
export declare class VenueTypeController {
    private readonly venueTypeService;
    constructor(venueTypeService: VenueTypeService);
    findAll(): Promise<VenueType[]>;
    findOne(id: number): Promise<VenueType>;
    create(createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType>;
    update(id: number, updateTypeDto: UpdateVenueTypeDto): Promise<VenueType>;
    delete(id: number): Promise<void>;
}
