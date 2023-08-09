import { Test, TestingModule } from '@nestjs/testing';

import { JwtService } from '@nestjs/jwt';
import { RolesServise } from '../../roles/roles.service';
import { getModelToken } from '@nestjs/sequelize';

import { Role } from '../../roles/models/role.model';
import { AdminService } from '../admin.service';
import { adminStub } from './stubs/admin.stub';
import { Admin } from '../models/admin.model';
import { CreateAdminDto } from '../dto/create-admin.dto';

describe('users servise', () => {
  let adminService: AdminService;

  const mockAdminRepository = {
    create: jest.fn().mockImplementation(adminStub),
    findOne: jest.fn().mockImplementation(adminStub),
    findAll: jest.fn().mockImplementation(() => [adminStub()]),
    findByPk: jest.fn().mockImplementation(adminStub),
    destroy: jest.fn(),
  };
  const mockRolesRepository = {
    findOne: jest.fn().mockImplementation((value) => 'ADMIN'),
  };
  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        AdminService,
        JwtService,
        RolesServise,
        {
          provide: getModelToken(Admin),
          useValue: mockAdminRepository,
        },
        {
          provide: getModelToken(Role),
          useValue: mockRolesRepository,
        },
      ],
    }).compile();
    adminService = moduleRef.get<AdminService>(AdminService);
  });
  it('should bu defined', () => {
    expect(adminService).toBeDefined();
  });

  describe('createUser', () => {
    describe('when createUser is called', () => {
      let newadmin: Admin;
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
        newadmin = await adminService.createAdmin(createAdminDto);
        console.log(newadmin);
      });

      it('shoild be create new user', async () => {
        expect(newadmin).toMatchObject({
          ...adminStub(),
          roles: ['ADMIN'],
        });
      });
    });
  });

  describe('findOne', () => {
    describe('when findONe is called', () => {
      it('then it should call usersService', async () => {
        expect(await adminService.findOne(adminStub().id)).toEqual(adminStub());
      });
    });
  });

  describe('findAll', () => {
    describe('when findAll is called', () => {
      it('then it should call usersService', async () => {
        expect(await adminService.findAll()).toEqual([adminStub()]);
      });
    });
  });

  describe('delete', () => {
    describe('when delete is called', () => {
      let res: Object;
      beforeAll(async () => {
        res = await adminService.delete(adminStub().id);
        console.log(res);
      });
      it('then it shuold return user', () => {
        expect(res).toEqual({ message: "Foydalanuvchi o'chirildi" });
      });
    });
  });
});
