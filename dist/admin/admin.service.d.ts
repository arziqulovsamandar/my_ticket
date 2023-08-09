import { Admin } from './models/admin.model';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { RolesServise } from '../roles/roles.service';
import { ActivateAdminDto } from './dto/activate-admin.dto';
export declare class AdminService {
    private readonly adminModel;
    private readonly roleService;
    constructor(adminModel: typeof Admin, roleService: RolesServise);
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin>;
    findByLogin(login: string): Promise<Admin>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<Admin>;
    delete(id: number): Promise<{
        message: string;
    }>;
    getAdminByLogin(login: string): Promise<Admin>;
    addRole(addRoleDto: AddRoleDto): Promise<Admin>;
    removeRole(addRoleDto: AddRoleDto): Promise<Admin>;
    activateAdmin(activateAdminDto: ActivateAdminDto): Promise<Admin>;
    reactivateAdmin(activateAdminDto: ActivateAdminDto): Promise<Admin>;
}
