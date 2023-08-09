"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const admin_model_1 = require("./models/admin.model");
const roles_service_1 = require("../roles/roles.service");
let AdminService = exports.AdminService = class AdminService {
    constructor(adminModel, roleService) {
        this.adminModel = adminModel;
        this.roleService = roleService;
    }
    async findAll() {
        return this.adminModel.findAll();
    }
    async findOne(id) {
        return this.adminModel.findByPk(id);
    }
    async findByLogin(login) {
        return this.adminModel.findOne({ where: { login } });
    }
    async createAdmin(createAdminDto) {
        const newAdmin = await this.adminModel.create(createAdminDto);
        const role = await this.roleService.getRoleByValue('ADMIN');
        if (!role) {
            throw new common_1.BadRequestException('Role not found');
        }
        newAdmin.roles = [role];
        return newAdmin;
    }
    async delete(id) {
        await this.adminModel.destroy({ where: { id } });
        return { message: "Foydalanuvchi o'chirildi" };
    }
    async getAdminByLogin(login) {
        const admin = await this.adminModel.findOne({
            where: { login },
            include: { all: true },
        });
        return admin;
    }
    async addRole(addRoleDto) {
        const admin = await this.adminModel.findByPk(addRoleDto.adminId);
        const role = await this.roleService.getRoleByValue(addRoleDto.value);
        if (role && admin) {
            await admin.$add('roles', role.id);
            const updateUser = await this.adminModel.findByPk(addRoleDto.adminId, {
                include: { all: true },
            });
            return updateUser;
        }
        throw new common_1.HttpException('Foydalanuvchi yoki ro topilmadi', common_1.HttpStatus.NOT_FOUND);
    }
    async removeRole(addRoleDto) {
        const admin = await this.adminModel.findByPk(addRoleDto.adminId);
        const role = await this.roleService.getRoleByValue(addRoleDto.value);
        if (role && admin) {
            await admin.$remove('roles', role.id);
            const updateAdmin = await this.adminModel.findByPk(addRoleDto.adminId, {
                include: { all: true },
            });
            return updateAdmin;
        }
        throw new common_1.HttpException('Foydalanuvchi yoki ro topilmadi', common_1.HttpStatus.NOT_FOUND);
    }
    async activateAdmin(activateAdminDto) {
        const admin = await this.adminModel.findByPk(activateAdminDto.adminId);
        if (!admin) {
            throw new common_1.HttpException('Foydalanuvchi topilmadi', common_1.HttpStatus.NOT_FOUND);
        }
        admin.is_active = true;
        await admin.save();
        return admin;
    }
    async reactivateAdmin(activateAdminDto) {
        const admin = await this.adminModel.findByPk(activateAdminDto.adminId);
        if (!admin) {
            throw new common_1.HttpException('Foydalanuvchi topilmadi', common_1.HttpStatus.NOT_FOUND);
        }
        admin.is_active = false;
        await admin.save();
        return admin;
    }
};
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesServise])
], AdminService);
//# sourceMappingURL=admin.service.js.map