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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const swagger_1 = require("@nestjs/swagger");
const add_role_dto_1 = require("./dto/add-role.dto");
let AdminController = exports.AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    addRole(addRoleDto) {
        return this.adminService.addRole(addRoleDto);
    }
    activeUser(addRoleDto) {
        return this.adminService.activateAdmin(addRoleDto);
    }
    reactiveUser(addRoleDto) {
        return this.adminService.reactivateAdmin(addRoleDto);
    }
    removeRole(addRoleDto) {
        return this.adminService.removeRole(addRoleDto);
    }
    async findAll() {
        return this.adminService.findAll();
    }
    async findOne(id) {
        return this.adminService.findOne(id);
    }
    async createAdmin(createAdminDto) {
        return this.adminService.createAdmin(createAdminDto);
    }
    async delete(id) {
        return this.adminService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Role add qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('add_role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "addRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Roleni acitve qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('active_user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "activeUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Roleni reactive qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('reactive_user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "reactiveUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Role delete qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('remove_role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "removeRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All admin' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Admin' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Admin' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Admin' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "delete", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admins'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map