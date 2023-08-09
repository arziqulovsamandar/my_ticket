import { Model } from 'sequelize-typescript';
import { Seat } from '../../seat/models/seat.model';
interface SeatTypeAttributes {
    name: string;
}
export declare class SeatType extends Model<SeatType, SeatTypeAttributes> {
    id: number;
    name: string;
    seats: Seat[];
}
export {};
