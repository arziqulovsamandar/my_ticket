import { Model } from 'sequelize-typescript';
import { Cart } from '../../cart/models/cart.model';
import { CustomerAddress } from '../../customer_address/models/customer_address.model';
import { CustomerCard } from '../../customer_card/models/customer_card.model';
interface CustomerAtr {
    first_name: string;
    last_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    birth_date: Date;
    gender: number;
    lang_id: number;
    hashed_refresh_token: string;
}
export declare class Customer extends Model<Customer, CustomerAtr> {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    birth_date: Date;
    gender: number;
    lang_id: number;
    hashed_refresh_token: string;
    carts: Cart[];
    customerCards: CustomerCard[];
    customerAddresss: CustomerAddress[];
}
export {};
