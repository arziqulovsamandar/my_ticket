import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';
export declare class RolesServise {
    private roleRepo;
    constructor(roleRepo: typeof Role);
    getAllRole(): Promise<Role[]>;
    getRoleByValue(value: string): Promise<Role>;
    createRole(createMachine_driverDto: CreateRoleDto): Promise<Role>;
    updateRole(value: number, updateMachine_driverDto: UpdateRoleDto): Promise<Role>;
    deleteRole(value: string): Promise<void>;
}
