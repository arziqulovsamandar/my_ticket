import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Booking } from '../../booking/models/booking.model';
import { Customer } from '../../customer/models/customer.model';
import { Ticket } from '../../ticket/models/ticket.model';

interface CartAtr {
  ticket_id: Number;
  customer_id: number;
  createdAt: Date;
  fineshedAt: Date;
  status_id: number;
}

@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, CartAtr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  customer_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  fineshedAt: Date;

  @Column({
    type: DataType.INTEGER,
  })
  is_creator: number;

  @HasMany(() => Booking)
  bookings: Booking[];

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  ticket_id: number;

  @BelongsTo(() => Ticket)
  tickets:Ticket;
}
