import { Model } from 'sequelize-typescript';
import { Customer } from '../../customer/models/customer.model';
interface CustomerAddressAttributes {
    name: string;
    country_id: string;
    region_id: string;
    distirct_id: string;
    street: string;
    house: string;
    flat: string;
    location: string;
    post_index: string;
    info: string;
    customer_id: number;
}
export declare class CustomerAddress extends Model<CustomerAddress, CustomerAddressAttributes> {
    id: number;
    name: string;
    country_id: string;
    region_id: string;
    distirct_id: string;
    street: string;
    house: string;
    flat: string;
    location: string;
    post_index: string;
    info: string;
    customer_id: number;
    customer: Customer;
}
export {};
