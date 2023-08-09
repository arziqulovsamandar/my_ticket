import { Model } from 'sequelize-typescript';
import { Role } from '../../roles/models/role.model';
interface AdminAtr {
    name: string;
    login: string;
    hashed_password: string;
    is_active: boolean;
    is_creator: string;
    hashed_refresh_token: string;
}
export declare class Admin extends Model<Admin, AdminAtr> {
    id: number;
    name: string;
    login: string;
    hashed_password: string;
    is_active: boolean;
    is_creator: string;
    hashed_refresh_token: string;
    roles: Role[];
}
export {};
