import { Admin } from './models/admin.model';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AddRoleDto } from './dto/add-role.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    addRole(addRoleDto: AddRoleDto): Promise<Admin>;
    activeUser(addRoleDto: AddRoleDto): Promise<Admin>;
    reactiveUser(addRoleDto: AddRoleDto): Promise<Admin>;
    removeRole(addRoleDto: AddRoleDto): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<Admin>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
