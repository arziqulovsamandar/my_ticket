import { CustomerAddress } from './models/customer_address.model';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
export declare class CustomerAddressController {
    private readonly customerAddressService;
    constructor(customerAddressService: CustomerAddressService);
    findAll(): Promise<CustomerAddress[]>;
    findOne(id: number): Promise<CustomerAddress>;
    create(customerAddressDto: CreateCustomerAddressDto): Promise<CustomerAddress>;
    update(id: number, customerAddressDto: CreateCustomerAddressDto): Promise<CustomerAddress>;
    delete(id: number): Promise<void>;
}
