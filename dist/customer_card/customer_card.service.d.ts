import { CustomerCard } from './models/customer_card.model';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
export declare class CustomerCardService {
    private readonly customerCardModel;
    constructor(customerCardModel: typeof CustomerCard);
    findAll(): Promise<CustomerCard[]>;
    findOne(id: number): Promise<CustomerCard>;
    create(createCustomerCardDto: CreateCustomerCardDto): Promise<CustomerCard>;
    update(id: number, updateCustomerCardDto: UpdateCustomerCardDto): Promise<CustomerCard>;
    delete(id: number): Promise<void>;
}
