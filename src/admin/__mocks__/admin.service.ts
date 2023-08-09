import { adminStub } from '../test/stubs/admin.stub';

export const AdminService = jest.fn().mockReturnValue({
  findOne: jest.fn().mockResolvedValue(adminStub()),
  findAll: jest.fn().mockResolvedValue([adminStub()]),
  createAdmin: jest.fn().mockResolvedValue(adminStub()),
  delete: jest
    .fn()
    .mockResolvedValue({ message: "Foydalanuvchi o'chirildi" }),
});
