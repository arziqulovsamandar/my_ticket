import { Model } from 'sequelize-typescript';
import { Venue } from '../../venue/models/venue.model';
import { SeatType } from '../../seat_type/models/seat_type.model';
import { Ticket } from '../../ticket/models/ticket.model';
interface SeatAttributes {
    sector: string;
    row_number: string;
    number: string;
    venue_id: number;
    seat_type_id: number;
    location_in_schema: boolean;
}
export declare class Seat extends Model<Seat, SeatAttributes> {
    id: number;
    sector: string;
    row_number: string;
    number: string;
    venue_id: number;
    venues: Venue;
    seat_type_id: number;
    seat_types: SeatType;
    seat_location_in_schema: boolean;
    tickets: Ticket[];
}
export {};
