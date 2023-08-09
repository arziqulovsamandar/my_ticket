import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { EventType } from '../../event_type/models/event_type.model';
import { HumanCategory } from '../../human_category/models/human_category.model';
import { Venue } from '../../venue/models/venue.model';
import { Ticket } from '../../ticket/models/ticket.model';


interface EventAttributes {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_type_id: number;
  human_category_id: number;
  venue_id: number;
  lang_id: bigint;
  release_date: string;
}

@Table({ tableName: 'event' })
export class Event extends Model<Event, EventAttributes> {
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
  photo: string;

  @Column({
    type: DataType.STRING,
  })
  start_date: string;

  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @Column({
    type: DataType.STRING,
  })
  finish_date: string;

  @Column({
    type: DataType.STRING,
  })
  finish_time: string;

  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  event_type_id: number;

  @BelongsTo(() => EventType)
  event_types: EventType;

  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  human_category_id: number;

  @BelongsTo(() => HumanCategory)
  human_categorys: HumanCategory;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  venue_id: number;

  @BelongsTo(() => Venue)
  venues: Venue;

  @Column({
    type: DataType.BIGINT,
  })
  lang_id: bigint;

  @Column({
    type: DataType.STRING,
  })
  release_date: string;

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
