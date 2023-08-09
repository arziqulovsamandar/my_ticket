import { RolesServise } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesServise);
    createRole(createRoleDto: CreateRoleDto): Promise<Role>;
    getAllRole(): Promise<Role[]>;
    getRoleByValue(value: string): Promise<Role>;
    updateRole(id: string, updateroleDto: UpdateRoleDto): Promise<Role>;
    delete(id: string): Promise<void>;
}
