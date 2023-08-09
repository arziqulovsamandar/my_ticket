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
exports.HumanCategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const human_category_model_1 = require("./models/human_category.model");
let HumanCategoryService = exports.HumanCategoryService = class HumanCategoryService {
    constructor(humanCategoryModel) {
        this.humanCategoryModel = humanCategoryModel;
    }
    async findAll() {
        return this.humanCategoryModel.findAll();
    }
    async findOne(id) {
        return this.humanCategoryModel.findByPk(id);
    }
    async create(createHumanCategoryDto) {
        return this.humanCategoryModel.create(createHumanCategoryDto);
    }
    async update(id, updateHumanCategoryDto) {
        const builder = await this.humanCategoryModel.update(updateHumanCategoryDto, {
            where: { id },
            returning: true,
        });
        return builder[1][0].dataValues;
    }
    async delete(id) {
        const numRowsDeleted = await this.humanCategoryModel.destroy({
            where: { id },
        });
        if (numRowsDeleted === 0) {
            throw new Error(`Could not delete human category with id ${id}`);
        }
    }
};
exports.HumanCategoryService = HumanCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(human_category_model_1.HumanCategory)),
    __metadata("design:paramtypes", [Object])
], HumanCategoryService);
//# sourceMappingURL=human_category.service.js.map