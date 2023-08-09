import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumanCategory } from './models/human_category.model';
import {  HumanCategoryService} from './human_category.service';
import { HumanCategoryController } from './human_category.controller';

@Module({
  imports: [SequelizeModule.forFeature([HumanCategory])],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
  exports: [HumanCategoryService],
})
export class HumanCategoryModule {}
