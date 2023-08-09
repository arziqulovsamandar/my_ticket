import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { RolesServise } from '../roles/roles.service';
import { ActivateAdminDto } from './dto/activate-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin)
    private readonly adminModel: typeof Admin,
    private readonly roleService: RolesServise,
  ) {}

  async findAll(): Promise<Admin[]> {
    return this.adminModel.findAll();
  }

  async findOne(id: number): Promise<Admin> {
    return this.adminModel.findByPk(id);
  }

  async findByLogin(login: string): Promise<Admin> {
    return this.adminModel.findOne({ where: { login } });
  }

  async createAdmin(createAdminDto: CreateAdminDto) {
    const newAdmin = await this.adminModel.create(createAdminDto);
    const role = await this.roleService.getRoleByValue('ADMIN');
    if (!role) {
      throw new BadRequestException('Role not found');
    }
    // await newUser.$set('roles', [role.id]);
    // await newUser.save();
    newAdmin.roles = [role];

    return newAdmin;
  }

  async delete(id: number) {
    await this.adminModel.destroy({ where: { id } });
    return { message: "Foydalanuvchi o'chirildi" };
  }

  async getAdminByLogin(login: string) {
    const admin = await this.adminModel.findOne({
      where: { login },
      include: { all: true },
    });
    return admin;
  }

  async addRole(addRoleDto: AddRoleDto) {
    const admin = await this.adminModel.findByPk(addRoleDto.adminId);
    const role = await this.roleService.getRoleByValue(addRoleDto.value);

    if (role && admin) {
      await admin.$add('roles', role.id);
      const updateUser = await this.adminModel.findByPk(addRoleDto.adminId, {
        include: { all: true },
      });
      return updateUser;
    }
    throw new HttpException(
      'Foydalanuvchi yoki ro topilmadi',
      HttpStatus.NOT_FOUND,
    );
  }

  async removeRole(addRoleDto: AddRoleDto) {
    const admin = await this.adminModel.findByPk(addRoleDto.adminId);
    const role = await this.roleService.getRoleByValue(addRoleDto.value);

    if (role && admin) {
      await admin.$remove('roles', role.id);
      const updateAdmin = await this.adminModel.findByPk(addRoleDto.adminId, {
        include: { all: true },
      });
      return updateAdmin;
    }
    throw new HttpException(
      'Foydalanuvchi yoki ro topilmadi',
      HttpStatus.NOT_FOUND,
    );
  }

  async activateAdmin(activateAdminDto: ActivateAdminDto) {
    const admin = await this.adminModel.findByPk(activateAdminDto.adminId);
    if (!admin) {
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    admin.is_active = true;
    await admin.save();
    return admin;
  }

  async reactivateAdmin(activateAdminDto: ActivateAdminDto) {
    const admin = await this.adminModel.findByPk(activateAdminDto.adminId);
    if (!admin) {
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    admin.is_active = false;
    await admin.save();
    return admin;
  }
}
