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
exports.SeatController = void 0;
const common_1 = require("@nestjs/common");
const seat_service_1 = require("./seat.service");
const update_seat_dto_1 = require("./dto/update-seat.dto");
const create_seat_dto_1 = require("./dto/create-seat.dto");
const swagger_1 = require("@nestjs/swagger");
let SeatController = exports.SeatController = class SeatController {
    constructor(seatService) {
        this.seatService = seatService;
    }
    async findAll() {
        return this.seatService.findAll();
    }
    async findOne(id) {
        return this.seatService.findOne(id);
    }
    async create(createSetDto) {
        return this.seatService.create(createSetDto);
    }
    async update(id, updateSeatDto) {
        return this.seatService.update(id, updateSeatDto);
    }
    async delete(id) {
        return this.seatService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Seat' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeatController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Seat' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeatController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Seat' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seat_dto_1.CreateSeatDto]),
    __metadata("design:returntype", Promise)
], SeatController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Seat' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_seat_dto_1.UpdateSeatDto]),
    __metadata("design:returntype", Promise)
], SeatController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Seat' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeatController.prototype, "delete", null);
exports.SeatController = SeatController = __decorate([
    (0, common_1.Controller)('seats'),
    __metadata("design:paramtypes", [seat_service_1.SeatService])
], SeatController);
//# sourceMappingURL=seat.controller.js.map