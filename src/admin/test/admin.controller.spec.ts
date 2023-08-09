import { Test } from '@nestjs/testing';

import { JwtService } from '@nestjs/jwt';
import { AdminController } from '../admin.controller';
import { AdminService } from '../admin.service';
import { Admin } from '../models/admin.model';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { adminStub } from './stubs/admin.stub';

jest.mock('../admin.service');
describe('Admin contoller', () => {
  let adminController: AdminController;
  let adminService: AdminService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [AdminService, JwtService],
    }).compile();
    adminController = moduleRef.get<AdminController>(AdminController);
    adminService = moduleRef.get<AdminService>(AdminService);
    jest.clearAllMocks();
  });

  it('should be defind adminController', () => {
    expect(adminController).toBeDefined();
  });
  it('should be defind adminService', () => {
    expect(adminService).toBeDefined();
  });

  describe('createAdmin', () => {
    describe('when createAdmin is called', () => {
      let admin: Admin;
      let createAdminDto: CreateAdminDto;
      beforeAll(async () => {
        createAdminDto = {
          name: adminStub().name,
          login: adminStub().login,
          hashed_password: adminStub().hashed_password,
          is_active: adminStub().is_active,
          is_creator: adminStub().is_creator,
          hashed_refresh_token: adminStub().hashed_refresh_token,
        };
        admin = await adminController.createAdmin(createAdminDto);
        console.log(admin);
      });

      it('then it should call adminService', () => {
        expect(adminService.createAdmin).toHaveBeenCalledWith(createAdminDto);
      });
      it('then it shuold return user', () => {
        expect(admin).toEqual(adminStub());
      });
    });
  });

  describe('findOne', () => {
    describe('when findOne is called', () => {
      let admin: Admin;
      beforeEach(async () => {
        admin = await adminController.findOne(adminStub().id);
      });

      it('then it should call adminService', () => {
        expect(adminService.findOne).toHaveBeenCalledWith(adminStub().id);
      });
      it('then it shuold return user', () => {
        expect(admin).toEqual(adminStub());
      });
    });
  });

  describe('findAll', () => {
    describe('when findAll is called', () => {
      let admin: Admin[];
      beforeEach(async () => {
        admin = await adminController.findAll();
      });

      it('then it should call adminService', () => {
        expect(adminService.findAll).toBeCalled();
      });
      it('then it shuold return user', () => {
        expect(admin).toEqual([adminStub()]);
      });
    });
  });

  describe('delete', () => {
    describe('when delete is called', () => {
      let res: Object;
      beforeAll(async () => {
        res = await adminController.delete(adminStub().id);
        console.log(res);
      });

      it('then it should call adminService', () => {
        expect(adminService.delete).toBeCalledWith(adminStub().id);
      });
      it('then it shuold return user', () => {
        expect(res).toEqual({ message: "Foydalanuvchi o'chirildi" });
      });
    });
  });
});
