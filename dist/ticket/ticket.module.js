"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketModule = void 0;
const common_1 = require("@nestjs/common");
const ticket_service_1 = require("./ticket.service");
const ticket_model_1 = require("./models/ticket.model");
const sequelize_1 = require("@nestjs/sequelize");
const event_model_1 = require("../event/models/event.model");
const seat_model_1 = require("../seat/models/seat.model");
const ticket_controller_1 = require("./ticket.controller");
let TicketModule = exports.TicketModule = class TicketModule {
};
exports.TicketModule = TicketModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([ticket_model_1.Ticket, event_model_1.Event, seat_model_1.Seat])],
        controllers: [ticket_controller_1.TicketController],
        providers: [ticket_service_1.TicketService],
        exports: [ticket_service_1.TicketService],
    })
], TicketModule);
//# sourceMappingURL=ticket.module.js.map