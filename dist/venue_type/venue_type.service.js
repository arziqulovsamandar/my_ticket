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
exports.VenueTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const venue_type_model_1 = require("./models/venue_type.model");
let VenueTypeService = exports.VenueTypeService = class VenueTypeService {
    constructor(venueTypeModel) {
        this.venueTypeModel = venueTypeModel;
    }
    async findAll() {
        return this.venueTypeModel.findAll();
    }
    async findOne(id) {
        return this.venueTypeModel.findByPk(id);
    }
    async create(createVenueTypeDto) {
        return this.venueTypeModel.create(createVenueTypeDto);
    }
    async update(id, updateVenueTypeDto) {
        const builder = await this.venueTypeModel.update(updateVenueTypeDto, {
            where: { id },
            returning: true,
        });
        return builder[1][0].dataValues;
    }
    async delete(id) {
        const numRowsDeleted = await this.venueTypeModel.destroy({
            where: { id },
        });
        if (numRowsDeleted === 0) {
            throw new Error(`Could not delete venue type with id ${id}`);
        }
    }
};
exports.VenueTypeService = VenueTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(venue_type_model_1.VenueType)),
    __metadata("design:paramtypes", [Object])
], VenueTypeService);
//# sourceMappingURL=venue_type.service.js.map