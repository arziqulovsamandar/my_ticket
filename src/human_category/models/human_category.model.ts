import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Event } from '../../event/models/event.model';

interface HumanCategoryAttributes {
  name: string;
  start_age: string;
  finish_age: string;
  gender: string;
}

@Table({ tableName: 'human_category' })
export class HumanCategory extends Model<
  HumanCategory,
  HumanCategoryAttributes
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  start_age: string;

  @Column({
    type: DataType.STRING,
  })
  finish_age: string;

  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @HasMany(() => Event)
  events: Event[];
}
