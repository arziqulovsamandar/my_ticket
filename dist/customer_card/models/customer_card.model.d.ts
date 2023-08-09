import { Model } from 'sequelize-typescript';
import { Customer } from '../../customer/models/customer.model';
interface CustomerCardAttributes {
    name: string;
    phone: string;
    number: string;
    year: string;
    month: string;
    is_active: boolean;
    is_main: boolean;
    customer_id: number;
}
export declare class CustomerCard extends Model<CustomerCard, CustomerCardAttributes> {
    id: number;
    name: string;
    phone: string;
    number: string;
    year: string;
    month: string;
    is_active: boolean;
    is_main: boolean;
    customer_id: number;
    customer: Customer;
}
export {};
