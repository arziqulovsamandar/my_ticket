import { CustomerCard } from './models/customer_card.model';
import { CustomerCardService } from './customer_card.service';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
export declare class CustomerCardController {
    private readonly customerCardService;
    constructor(customerCardService: CustomerCardService);
    findAll(): Promise<CustomerCard[]>;
    findOne(id: number): Promise<CustomerCard>;
    create(createCustomerCardDto: CreateCustomerCardDto): Promise<CustomerCard>;
    update(id: number, updateCustomerCardDto: UpdateCustomerCardDto): Promise<CustomerCard>;
    delete(id: number): Promise<void>;
}
