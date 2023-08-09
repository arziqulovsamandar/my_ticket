"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const admin_stub_1 = require("../test/stubs/admin.stub");
exports.AdminService = jest.fn().mockReturnValue({
    findOne: jest.fn().mockResolvedValue((0, admin_stub_1.adminStub)()),
    findAll: jest.fn().mockResolvedValue([(0, admin_stub_1.adminStub)()]),
    createAdmin: jest.fn().mockResolvedValue((0, admin_stub_1.adminStub)()),
    delete: jest
        .fn()
        .mockResolvedValue({ message: "Foydalanuvchi o'chirildi" }),
});
//# sourceMappingURL=admin.service.js.map