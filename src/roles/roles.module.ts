import { Module } from '@nestjs/common';
import { RolesServise } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './models/role.model';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesServise],
  exports: [RolesServise],
})
export class RolesModule {}
