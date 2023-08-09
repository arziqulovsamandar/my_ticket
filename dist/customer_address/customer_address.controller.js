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
exports.CustomerAddressController = void 0;
const common_1 = require("@nestjs/common");
const customer_address_service_1 = require("./customer_address.service");
const create_customer_address_dto_1 = require("./dto/create-customer_address.dto");
const swagger_1 = require("@nestjs/swagger");
let CustomerAddressController = exports.CustomerAddressController = class CustomerAddressController {
    constructor(customerAddressService) {
        this.customerAddressService = customerAddressService;
    }
    async findAll() {
        return this.customerAddressService.findAll();
    }
    async findOne(id) {
        return this.customerAddressService.findOne(id);
    }
    async create(customerAddressDto) {
        return this.customerAddressService.create(customerAddressDto);
    }
    async update(id, customerAddressDto) {
        return this.customerAddressService.update(id, customerAddressDto);
    }
    async delete(id) {
        return this.customerAddressService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Customer_Address' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerAddressController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Customer_Address' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerAddressController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Customer_Address' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_address_dto_1.CreateCustomerAddressDto]),
    __metadata("design:returntype", Promise)
], CustomerAddressController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Customer_Address' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_customer_address_dto_1.CreateCustomerAddressDto]),
    __metadata("design:returntype", Promise)
], CustomerAddressController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Customer_Address' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerAddressController.prototype, "delete", null);
exports.CustomerAddressController = CustomerAddressController = __decorate([
    (0, common_1.Controller)('customer-addresses'),
    __metadata("design:paramtypes", [customer_address_service_1.CustomerAddressService])
], CustomerAddressController);
//# sourceMappingURL=customer_address.controller.js.map