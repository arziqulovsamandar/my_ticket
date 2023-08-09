import { Model } from 'sequelize-typescript';
import { Booking } from '../../booking/models/booking.model';
import { Customer } from '../../customer/models/customer.model';
import { Ticket } from '../../ticket/models/ticket.model';
interface CartAtr {
    ticket_id: Number;
    customer_id: number;
    createdAt: Date;
    fineshedAt: Date;
    status_id: number;
}
export declare class Cart extends Model<Cart, CartAtr> {
    id: number;
    customer_id: number;
    customer: Customer;
    createdAt: Date;
    fineshedAt: Date;
    is_creator: number;
    bookings: Booking[];
    ticket_id: number;
    tickets: Ticket;
}
export {};
