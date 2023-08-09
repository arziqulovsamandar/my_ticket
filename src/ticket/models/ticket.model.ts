import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Event } from '../../event/models/event.model';
import { Seat } from '../../seat/models/seat.model';
import { Cart } from '../../cart/models/cart.model';

interface TicketAttributes {
  event_id: number;
  seat_id: number;
  price: string;
  service_fee: string;
  status: string;
  ticket_type: string;
}

@Table({ tableName: 'ticket' })
export class Ticket extends Model<Ticket, TicketAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  event_id: number;

  @BelongsTo(() => Event)
  events: Event;

  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  seat_id: number;

  @BelongsTo(() => Seat)
  seats: Seat;

  @Column({
    type: DataType.STRING,
  })
  price: string;

  @Column({
    type: DataType.STRING,
  })
  service_fee: string;

  @Column({
    type: DataType.STRING,
  })
  status: string;

  @Column({
    type: DataType.STRING,
  })
  ticket_type: string;

  @HasMany(() => Cart)
  carts: Cart[];
}
