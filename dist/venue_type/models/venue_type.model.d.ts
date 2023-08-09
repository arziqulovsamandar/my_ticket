import { Model } from 'sequelize-typescript';
import { Venue } from '../../venue/models/venue.model';
interface VenueTypeAttributes {
    name: string;
    id: Number;
    venue_id: number;
}
export declare class VenueType extends Model<VenueType, VenueTypeAttributes> {
    id: number;
    name: string;
    venue_id: number;
    venue: Venue;
    Venue_types: Venue[];
}
export {};
