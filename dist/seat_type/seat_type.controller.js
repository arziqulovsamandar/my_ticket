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
exports.SeatTypeController = void 0;
const common_1 = require("@nestjs/common");
const seat_type_service_1 = require("./seat_type.service");
const update_seat_type_dto_1 = require("./dto/update-seat_type.dto");
const create_seat_type_dto_1 = require("./dto/create-seat_type.dto");
const swagger_1 = require("@nestjs/swagger");
let SeatTypeController = exports.SeatTypeController = class SeatTypeController {
    constructor(seatTypeService) {
        this.seatTypeService = seatTypeService;
    }
    async findAll() {
        return this.seatTypeService.findAll();
    }
    async findOne(id) {
        return this.seatTypeService.findOne(id);
    }
    async create(createSeatTypeDto) {
        return this.seatTypeService.create(createSeatTypeDto);
    }
    async update(id, updateSeatTypeDto) {
        return this.seatTypeService.update(id, updateSeatTypeDto);
    }
    async delete(id) {
        return this.seatTypeService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Seat_Type' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeatTypeController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Seat_Type' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeatTypeController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'CReate Seat_Type' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seat_type_dto_1.CreateSeatTypeDto]),
    __metadata("design:returntype", Promise)
], SeatTypeController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Seat_Type' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_seat_type_dto_1.UpdateSeatTypeDto]),
    __metadata("design:returntype", Promise)
], SeatTypeController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Seat_Type' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeatTypeController.prototype, "delete", null);
exports.SeatTypeController = SeatTypeController = __decorate([
    (0, common_1.Controller)('seat-types'),
    __metadata("design:paramtypes", [seat_type_service_1.SeatTypeService])
], SeatTypeController);
//# sourceMappingURL=seat_type.controller.js.map