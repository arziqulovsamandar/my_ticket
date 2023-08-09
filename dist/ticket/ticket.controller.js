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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const ticket_service_1 = require("./ticket.service");
const create_ticket_dto_1 = require("./dto/create-ticket.dto");
const update_ticket_dto_1 = require("./dto/update-ticket.dto");
const swagger_1 = require("@nestjs/swagger");
let TicketController = exports.TicketController = class TicketController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    async findAll() {
        return this.ticketService.findAll();
    }
    async findOne(id) {
        return this.ticketService.findOne(id);
    }
    async create(createTicketDto) {
        return this.ticketService.create(createTicketDto);
    }
    async update(id, updateTicketDto) {
        return this.ticketService.update(id, updateTicketDto);
    }
    async delete(id) {
        return this.ticketService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Ticket' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Ticket' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Ticket' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_dto_1.CreateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Ticket' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_ticket_dto_1.UpdateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Ticket' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "delete", null);
exports.TicketController = TicketController = __decorate([
    (0, common_1.Controller)('tickets'),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketController);
//# sourceMappingURL=ticket.controller.js.map