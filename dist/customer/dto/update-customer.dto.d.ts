import { CreateCustomerDto } from './create-customer.dto';
declare const UpdateCustomerDto_base: import("@nestjs/common").Type<Partial<CreateCustomerDto>>;
export declare class UpdateCustomerDto extends UpdateCustomerDto_base {
    first_name?: string;
    last_name?: string;
    phone?: string;
    hashed_password?: string;
    email?: string;
    birth_date?: Date;
    gender?: number;
    lang_id?: number;
    hashed_refresh_token?: string;
}
export {};
