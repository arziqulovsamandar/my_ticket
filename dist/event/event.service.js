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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const event_model_1 = require("./models/event.model");
let EventService = exports.EventService = class EventService {
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async findAll() {
        return this.eventModel.findAll({
            include: { all: true },
        });
    }
    async findOne(id) {
        return this.eventModel.findByPk(id);
    }
    async create(createEventDto) {
        return this.eventModel.create(createEventDto);
    }
    async update(id, updateEventDto) {
        const event = await this.eventModel.update(updateEventDto, {
            where: { id },
            returning: true,
        });
        return event[1][0].dataValues;
    }
    async delete(id) {
        const numRowsDeleted = await this.eventModel.destroy({
            where: { id },
        });
        if (numRowsDeleted === 0) {
            throw new Error(`Could not delete event with id ${id}`);
        }
    }
};
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(event_model_1.Event)),
    __metadata("design:paramtypes", [Object])
], EventService);
//# sourceMappingURL=event.service.js.map