import { Customer } from './models/customer.model';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerService {
    private readonly customerModel;
    constructor(customerModel: typeof Customer);
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    create(createcustomerDto: CreateCustomerDto): Promise<Customer>;
    update(id: number, updatecustomerDto: UpdateCustomerDto): Promise<Customer>;
    delete(id: number): Promise<void>;
}
