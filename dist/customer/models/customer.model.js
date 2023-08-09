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
exports.Customer = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const cart_model_1 = require("../../cart/models/cart.model");
const customer_address_model_1 = require("../../customer_address/models/customer_address.model");
const customer_card_model_1 = require("../../customer_card/models/customer_card.model");
let Customer = exports.Customer = class Customer extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "first_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "last_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "hashed_password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Customer.prototype, "birth_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.SMALLINT,
    }),
    __metadata("design:type", Number)
], Customer.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.SMALLINT,
    }),
    __metadata("design:type", Number)
], Customer.prototype, "lang_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "hashed_refresh_token", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => cart_model_1.Cart),
    __metadata("design:type", Array)
], Customer.prototype, "carts", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => customer_card_model_1.CustomerCard),
    __metadata("design:type", Array)
], Customer.prototype, "customerCards", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => customer_address_model_1.CustomerAddress),
    __metadata("design:type", Array)
], Customer.prototype, "customerAddresss", void 0);
exports.Customer = Customer = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'customer' })
], Customer);
//# sourceMappingURL=customer.model.js.map