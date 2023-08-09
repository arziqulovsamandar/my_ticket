import { Model } from 'sequelize-typescript';
import { VenueType } from '../../venue_type/models/venue_type.model';
import { Seat } from '../../seat/models/seat.model';
import { Event } from '../../event/models/event.model';
import { VenuePhoto } from '../../venue_photo/models/venue_photo.model';
interface VenueAttributes {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    venue_type_id: number;
    schema: string;
    region_id: string;
    district_id: string;
}
export declare class Venue extends Model<Venue, VenueAttributes> {
    id: number;
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    venue_type_id: number;
    venue_types: VenueType;
    schema: string;
    region_id: string;
    district_id: string;
    seats: Seat[];
    events: Event[];
    Venue_types: VenueType[];
    venue_photos: VenuePhoto[];
}
export {};
