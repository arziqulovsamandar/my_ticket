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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const venue_model_1 = require("../../venue/models/venue.model");
let VenueType = exports.VenueType = class VenueType extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], VenueType.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], VenueType.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => venue_model_1.Venue),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], VenueType.prototype, "venue_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => venue_model_1.Venue),
    __metadata("design:type", venue_model_1.Venue)
], VenueType.prototype, "venue", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => venue_model_1.Venue),
    __metadata("design:type", Array)
], VenueType.prototype, "Venue_types", void 0);
exports.VenueType = VenueType = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'venue_type' })
], VenueType);
//# sourceMappingURL=venue_type.model.js.map