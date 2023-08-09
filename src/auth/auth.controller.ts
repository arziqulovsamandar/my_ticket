import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { LoginDto } from './dto/login-auth.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Auth registration' })
  @Post('registration')
  create(@Body() createUserDto: CreateAdminDto) {
    return this.authService.registration(createUserDto);
  }

  @ApiOperation({ summary: 'login ' })
  @HttpCode(200)
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
