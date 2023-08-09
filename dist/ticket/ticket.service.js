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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const ticket_model_1 = require("./models/ticket.model");
let TicketService = exports.TicketService = class TicketService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async findAll() {
        return this.ticketModel.findAll({
            include: { all: true },
        });
    }
    async findOne(id) {
        return this.ticketModel.findByPk(id);
    }
    async create(createTicketDto) {
        return this.ticketModel.create(createTicketDto);
    }
    async update(id, updateTicketDto) {
        const builder = await this.ticketModel.update(updateTicketDto, {
            where: { id },
            returning: true,
        });
        return builder[1][0].dataValues;
    }
    async delete(id) {
        const numRowsDeleted = await this.ticketModel.destroy({
            where: { id },
        });
        if (numRowsDeleted === 0) {
            throw new Error(`Could not delete ticket with id ${id}`);
        }
    }
};
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(ticket_model_1.Ticket)),
    __metadata("design:paramtypes", [Object])
], TicketService);
//# sourceMappingURL=ticket.service.js.map