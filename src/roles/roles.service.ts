import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';

@Injectable()
export class RolesServise {
  constructor(
    @InjectModel(Role)
    private roleRepo: typeof Role,
  ) {}

  async getAllRole(): Promise<Role[]> {
    return this.roleRepo.findAll({ include: { all: true } });
  }

  async getRoleByValue(value: string): Promise<Role> {
    return this.roleRepo.findOne({ where: { value } });
  }

  async createRole(createMachine_driverDto: CreateRoleDto) {
    const machine1 = await this.roleRepo.create(createMachine_driverDto);
    return machine1;
  }

  async updateRole(
    value: number,
    updateMachine_driverDto: UpdateRoleDto,
  ): Promise<Role> {
    const machine = await this.roleRepo.update(updateMachine_driverDto, {
      where: { value },
      returning: true,
    });
    return machine[1][0].dataValues;
  }

  async deleteRole(value: string): Promise<void> {
    await this.roleRepo.destroy({ where: { value } });
  }
}
