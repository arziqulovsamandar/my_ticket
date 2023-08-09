import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { Admin } from './models/admin.model';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ApiOperation } from '@nestjs/swagger';
import {AddRoleDto} from './dto/add-role.dto'

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Role add qilish' })
  @HttpCode(200)
  @Post('add_role')
  addRole(@Body() addRoleDto: AddRoleDto) {
    return this.adminService.addRole(addRoleDto);
  }

  @ApiOperation({ summary: 'Roleni acitve qilish' })
  @HttpCode(200)
  @Post('active_user')
  activeUser(@Body() addRoleDto: AddRoleDto) {
    return this.adminService.activateAdmin(addRoleDto);
  }

  @ApiOperation({ summary: 'Roleni reactive qilish' })
  @HttpCode(200)
  @Post('reactive_user')
  reactiveUser(@Body() addRoleDto: AddRoleDto) {
    return this.adminService.reactivateAdmin(addRoleDto);
  }

  @ApiOperation({ summary: 'Role delete qilish' })
  @HttpCode(200)
  @Post('remove_role')
  removeRole(@Body() addRoleDto: AddRoleDto) {
    return this.adminService.removeRole(addRoleDto);
  }

  @ApiOperation({ summary: 'All admin' })
  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Admin' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Admin> {
    return this.adminService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Admin' })
  @Post()
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }

  @ApiOperation({ summary: 'Delete Admin' })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.adminService.delete(id);
  }
}
