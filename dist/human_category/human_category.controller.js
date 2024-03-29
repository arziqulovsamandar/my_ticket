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
exports.HumanCategoryController = void 0;
const common_1 = require("@nestjs/common");
const human_category_service_1 = require("./human_category.service");
const update_human_category_dto_1 = require("./dto/update-human_category.dto");
const create_human_category_dto_1 = require("./dto/create-human_category.dto");
const swagger_1 = require("@nestjs/swagger");
let HumanCategoryController = exports.HumanCategoryController = class HumanCategoryController {
    constructor(humanCategoryService) {
        this.humanCategoryService = humanCategoryService;
    }
    async findAll() {
        return this.humanCategoryService.findAll();
    }
    async findOne(id) {
        return this.humanCategoryService.findOne(id);
    }
    async create(createHumanCategoryDto) {
        return this.humanCategoryService.create(createHumanCategoryDto);
    }
    async update(id, updateHumanCategoryDto) {
        return this.humanCategoryService.update(id, updateHumanCategoryDto);
    }
    async delete(id) {
        return this.humanCategoryService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Human_Category' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Human_Category' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Human_Category' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_human_category_dto_1.CreateHumanCategoryDto]),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Human_Category' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_human_category_dto_1.UpdateHumanCategoryDto]),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Human_Category' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HumanCategoryController.prototype, "delete", null);
exports.HumanCategoryController = HumanCategoryController = __decorate([
    (0, common_1.Controller)('human-categories'),
    __metadata("design:paramtypes", [human_category_service_1.HumanCategoryService])
], HumanCategoryController);
//# sourceMappingURL=human_category.controller.js.map