import { Model } from 'sequelize-typescript';
import { Event } from '../../event/models/event.model';
import { Seat } from '../../seat/models/seat.model';
import { Cart } from '../../cart/models/cart.model';
interface TicketAttributes {
    event_id: number;
    seat_id: number;
    price: string;
    service_fee: string;
    status: string;
    ticket_type: string;
}
export declare class Ticket extends Model<Ticket, TicketAttributes> {
    id: number;
    event_id: number;
    events: Event;
    seat_id: number;
    seats: Seat;
    price: string;
    service_fee: string;
    status: string;
    ticket_type: string;
    carts: Cart[];
}
export {};
