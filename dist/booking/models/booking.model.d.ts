import { Model } from 'sequelize-typescript';
import { Cart } from '../../cart/models/cart.model';
interface BookingAtr {
    fineshed: Date;
    payment_method_id: number;
    delivery_method_id: number;
    discount_coupon_id: number;
    status_id: number;
    cart_id: number;
}
export declare class Booking extends Model<Booking, BookingAtr> {
    id: number;
    fineshed: Date;
    payment_method_id: number;
    delivery_method_id: number;
    discount_coupon_id: number;
    status_id: number;
    cart_id: number;
    carts: Cart;
}
export {};
