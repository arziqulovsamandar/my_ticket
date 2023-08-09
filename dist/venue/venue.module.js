"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const venue_model_1 = require("./models/venue.model");
const venue_service_1 = require("./venue.service");
const venue_type_model_1 = require("../venue_type/models/venue_type.model");
const venue_controller_1 = require("./venue.controller");
let VenueModule = exports.VenueModule = class VenueModule {
};
exports.VenueModule = VenueModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([venue_model_1.Venue, venue_type_model_1.VenueType])],
        controllers: [venue_controller_1.VenueController],
        providers: [venue_service_1.VenueService],
        exports: [venue_service_1.VenueService],
    })
], VenueModule);
//# sourceMappingURL=venue.module.js.map