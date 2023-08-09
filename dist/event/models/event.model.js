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
exports.Event = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const event_type_model_1 = require("../../event_type/models/event_type.model");
const human_category_model_1 = require("../../human_category/models/human_category.model");
const venue_model_1 = require("../../venue/models/venue.model");
const ticket_model_1 = require("../../ticket/models/ticket.model");
let Event = exports.Event = class Event extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "photo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "start_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "start_time", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "finish_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "finish_time", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
    }),
    __metadata("design:type", String)
], Event.prototype, "info", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => event_type_model_1.EventType),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Event.prototype, "event_type_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => event_type_model_1.EventType),
    __metadata("design:type", event_type_model_1.EventType)
], Event.prototype, "event_types", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => human_category_model_1.HumanCategory),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Event.prototype, "human_category_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => human_category_model_1.HumanCategory),
    __metadata("design:type", human_category_model_1.HumanCategory)
], Event.prototype, "human_categorys", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => venue_model_1.Venue),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Event.prototype, "venue_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => venue_model_1.Venue),
    __metadata("design:type", venue_model_1.Venue)
], Event.prototype, "venues", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
    }),
    __metadata("design:type", BigInt)
], Event.prototype, "lang_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "release_date", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ticket_model_1.Ticket),
    __metadata("design:type", Array)
], Event.prototype, "tickets", void 0);
exports.Event = Event = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'event' })
], Event);
//# sourceMappingURL=event.model.js.map