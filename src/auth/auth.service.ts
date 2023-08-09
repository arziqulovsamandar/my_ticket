import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import * as bcrypt from 'bcrypt';
import { Admin } from '../admin/models/admin.model';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: AdminService,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto);
    if (!user) {
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.generateToken(user);
  }

  private async validateUser(loginDto: LoginDto) {
    const user = await this.userService.getAdminByLogin(loginDto.login);
    if (!user) {
      throw new UnauthorizedException("Email yoki Parol nato'g'ri");
    }
    const validPassword = await bcrypt.compare(
      loginDto.hashed_password,
      user.hashed_password,
    );
    if (validPassword) {
      return user;
    }
    throw new UnauthorizedException("Email yoki Parol nato'g'ri");
  }

  async registration(userDto: CreateAdminDto) {
    const condidate = await this.userService.getAdminByLogin(userDto.login);
    if (condidate) {
      throw new HttpException(
        'bundat foydalanuvchi mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(userDto.hashed_password, 7);
    const user = await this.userService.createAdmin({
      ...userDto,
      hashed_password: hashedPassword,
    });
    return this.generateToken(user);
  }

  private async generateToken(admin: Admin) {
    const payload = { Login:admin.login, id: admin.id, roles: admin.roles };
    return { token: this.jwtService.sign(payload) };
  }
}
