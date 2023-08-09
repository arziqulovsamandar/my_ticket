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
exports.SeatService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const seat_model_1 = require("./models/seat.model");
const venue_model_1 = require("../venue/models/venue.model");
const seat_type_model_1 = require("../seat_type/models/seat_type.model");
let SeatService = exports.SeatService = class SeatService {
    constructor(seatModel) {
        this.seatModel = seatModel;
    }
    async findAll() {
        return this.seatModel.findAll({
            include: [
                {
                    model: venue_model_1.Venue,
                },
                {
                    model: seat_type_model_1.SeatType,
                },
            ],
        });
    }
    async findOne(id) {
        return this.seatModel.findByPk(id, {
            include: [
                {
                    model: venue_model_1.Venue,
                },
                {
                    model: seat_type_model_1.SeatType,
                },
            ],
        });
    }
    async create(createSeatDto) {
        return this.seatModel.create(createSeatDto);
    }
    async update(id, updateSeatDto) {
        const builder = await this.seatModel.update(updateSeatDto, {
            where: { id },
            returning: true,
        });
        return builder[1][0].dataValues;
    }
    async delete(id) {
        const numRowsDeleted = await this.seatModel.destroy({
            where: { id },
        });
        if (numRowsDeleted === 0) {
            throw new Error(`Could not delete seat with id ${id}`);
        }
    }
};
exports.SeatService = SeatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(seat_model_1.Seat)),
    __metadata("design:paramtypes", [Object])
], SeatService);
//# sourceMappingURL=seat.service.js.map