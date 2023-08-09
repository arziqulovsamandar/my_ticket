import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Admin } from '../../admin/models/admin.model';

interface PostCreationAttribute {
  title: string;
  content: string;
  image: string;
  adminId: number;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttribute> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'post1', description: 'Post title' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'post body', description: 'Post body' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  @ApiProperty({ example: 'post image', description: 'Post image' })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ApiProperty({ example: 'post owner id', description: 'Post owner' })
  @ForeignKey(() => Admin)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  adminId: number;

  @BelongsTo(() => Admin)
  author: Admin;
}
