import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Event } from '../../event/models/event.model';

interface EventTypeAttributes {
  name: string;
  parent_event_type_id: number;
}

@Table({ tableName: 'event_type' })
export class EventType extends Model<EventType, EventTypeAttributes> {
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

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_type_id: number;

  @BelongsTo(() => EventType, 'parent_event_type_id')
  parent_event_type: EventType;

  @HasMany(() => Event)
  events: Event[];
}
