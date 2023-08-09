import { Model } from 'sequelize-typescript';
import { Admin } from '../../admin/models/admin.model';
interface RoleCreateAttrs {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreateAttrs> {
    id: number;
    value: string;
    description: string;
    admins: Admin[];
}
export {};
