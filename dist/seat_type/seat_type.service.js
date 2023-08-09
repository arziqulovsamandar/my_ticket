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
exports.SeatTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const seat_type_model_1 = require("./models/seat_type.model");
let SeatTypeService = exports.SeatTypeService = class SeatTypeService {
    constructor(seatTypeModel) {
        this.seatTypeModel = seatTypeModel;
    }
    async findAll() {
        return this.seatTypeModel.findAll();
    }
    async findOne(id) {
        return this.seatTypeModel.findByPk(id);
    }
    async create(createSeatTypeDto) {
        return this.seatTypeModel.create(createSeatTypeDto);
    }
    async update(id, updateSeatTypeDto) {
        const builder = await this.seatTypeModel.update(updateSeatTypeDto, {
            where: { id },
            returning: true,
        });
        return builder[1][0].dataValues;
    }
    async delete(id) {
        const numRowsDeleted = await this.seatTypeModel.destroy({
            where: { id },
        });
        if (numRowsDeleted === 0) {
            throw new Error(`Could not delete seat type with id ${id}`);
        }
    }
};
exports.SeatTypeService = SeatTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(seat_type_model_1.SeatType)),
    __metadata("design:paramtypes", [Object])
], SeatTypeService);
//# sourceMappingURL=seat_type.service.js.map