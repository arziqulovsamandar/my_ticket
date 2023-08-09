import { CustomerAddress } from './models/customer_address.model';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
export declare class CustomerAddressService {
    private readonly customerAddressModel;
    constructor(customerAddressModel: typeof CustomerAddress);
    findAll(): Promise<CustomerAddress[]>;
    findOne(id: number): Promise<CustomerAddress>;
    create(customerAddress: CreateCustomerAddressDto): Promise<CustomerAddress>;
    update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto): Promise<CustomerAddress>;
    delete(id: number): Promise<void>;
}
