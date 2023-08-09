import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-auth.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: AdminService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    private validateUser;
    registration(userDto: CreateAdminDto): Promise<{
        token: string;
    }>;
    private generateToken;
}
