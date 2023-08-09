import { VenueType } from './models/venue_type.model';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
export declare class VenueTypeService {
    private readonly venueTypeModel;
    constructor(venueTypeModel: typeof VenueType);
    findAll(): Promise<VenueType[]>;
    findOne(id: number): Promise<VenueType>;
    create(createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType>;
    update(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<VenueType>;
    delete(id: number): Promise<void>;
}
