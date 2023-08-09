import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from '../admin/models/admin.model';
import { Post } from './models/post.model';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [SequelizeModule.forFeature([Admin, Post]), FilesModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
