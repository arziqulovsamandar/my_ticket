"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const event_model_1 = require("./models/event.model");
const event_service_1 = require("./event.service");
const event_type_model_1 = require("../event_type/models/event_type.model");
const human_category_model_1 = require("../human_category/models/human_category.model");
const venue_model_1 = require("../venue/models/venue.model");
const event_controller_1 = require("./event.controller");
let EventModule = exports.EventModule = class EventModule {
};
exports.EventModule = EventModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([event_model_1.Event, event_type_model_1.EventType, human_category_model_1.HumanCategory, venue_model_1.Venue]),
        ],
        controllers: [event_controller_1.EventController],
        providers: [event_service_1.EventService],
        exports: [event_service_1.EventService],
    })
], EventModule);
//# sourceMappingURL=event.module.js.map