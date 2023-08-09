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
exports.Cart = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const booking_model_1 = require("../../booking/models/booking.model");
const customer_model_1 = require("../../customer/models/customer.model");
const ticket_model_1 = require("../../ticket/models/ticket.model");
let Cart = exports.Cart = class Cart extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => customer_model_1.Customer),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Cart.prototype, "customer_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => customer_model_1.Customer),
    __metadata("design:type", customer_model_1.Customer)
], Cart.prototype, "customer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Cart.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Cart.prototype, "fineshedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "is_creator", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => booking_model_1.Booking),
    __metadata("design:type", Array)
], Cart.prototype, "bookings", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ticket_model_1.Ticket),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Cart.prototype, "ticket_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ticket_model_1.Ticket),
    __metadata("design:type", ticket_model_1.Ticket)
], Cart.prototype, "tickets", void 0);
exports.Cart = Cart = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'cart' })
], Cart);
//# sourceMappingURL=cart.model.js.map