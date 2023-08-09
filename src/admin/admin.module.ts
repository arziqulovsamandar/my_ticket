import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Role } from '../roles/models/role.model';
import { AdminRoles } from '../roles/models/admin-roles.model';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [SequelizeModule.forFeature([Admin,Role,AdminRoles]),
    RolesModule
  ],
  controllers:[AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
