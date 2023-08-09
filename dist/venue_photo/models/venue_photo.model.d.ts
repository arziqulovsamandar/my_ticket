import { Model } from 'sequelize-typescript';
import { Venue } from '../../venue/models/venue.model';
interface VenuePhotoAttributes {
    venue_id: number;
    url: string;
}
export declare class VenuePhoto extends Model<VenuePhoto, VenuePhotoAttributes> {
    id: number;
    venue_id: number;
    venues: Venue;
    url: string;
}
export {};
