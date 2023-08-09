import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RolesServise } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';
import { ApiOperation } from '@nestjs/swagger';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesServise) {}

  @ApiOperation({ summary: 'Roles yaratish' })
  @Post()
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }

  @ApiOperation({ summary: 'All Roles' })
  @Get('all')
  async getAllRole(): Promise<Role[]> {
    return this.rolesService.getAllRole();
  }

  @ApiOperation({ summary: 'value orqali roles topish' })
  @Get(':value')
  getRoleByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }

  @ApiOperation({ summary: 'Update Roles qilish ' })
  @Put(':id')
  async updateRole(
    @Param('id') id: string,
    @Body() updateroleDto: UpdateRoleDto,
  ): Promise<Role> {
    return this.rolesService.updateRole(+id, updateroleDto);
  }

  @ApiOperation({ summary: 'Delete Roles' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.rolesService.deleteRole(id);
  }
}
