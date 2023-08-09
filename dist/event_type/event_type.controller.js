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
exports.EventTypeController = void 0;
const common_1 = require("@nestjs/common");
const event_type_service_1 = require("./event_type.service");
const update_event_type_dto_1 = require("./dto/update-event_type.dto");
const create_event_type_dto_1 = require("./dto/create-event_type.dto");
const swagger_1 = require("@nestjs/swagger");
let EventTypeController = exports.EventTypeController = class EventTypeController {
    constructor(eventTypeService) {
        this.eventTypeService = eventTypeService;
    }
    async findAll() {
        return this.eventTypeService.findAll();
    }
    async findOne(id) {
        return this.eventTypeService.findOne(id);
    }
    async create(createEventTypeDto) {
        return this.eventTypeService.create(createEventTypeDto);
    }
    async update(id, updateEventTypeDto) {
        return this.eventTypeService.update(id, updateEventTypeDto);
    }
    async delete(id) {
        return this.eventTypeService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Event_Type' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTypeController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Event_Type' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventTypeController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Event_Type' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_type_dto_1.CreateEventTypeDto]),
    __metadata("design:returntype", Promise)
], EventTypeController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Event_Type' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_event_type_dto_1.UpdateEventTypeDto]),
    __metadata("design:returntype", Promise)
], EventTypeController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete event_Type' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventTypeController.prototype, "delete", null);
exports.EventTypeController = EventTypeController = __decorate([
    (0, common_1.Controller)('event-types'),
    __metadata("design:paramtypes", [event_type_service_1.EventTypeService])
], EventTypeController);
//# sourceMappingURL=event_type.controller.js.map