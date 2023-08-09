import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Cart } from '../../cart/models/cart.model';

interface BookingAtr {
  fineshed:Date;
  payment_method_id: number;
  delivery_method_id: number;
  discount_coupon_id: number;
  status_id: number;
  cart_id:number
}

@Table({ tableName: 'booking' })
export class Booking extends Model<Booking, BookingAtr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @Column({
    type: DataType.DATE,
  })
  fineshed: Date;

  @Column({
    type: DataType.INTEGER,
  })
  payment_method_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  delivery_method_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  discount_coupon_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;


  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  cart_id: number;

  @BelongsTo(() => Cart)
  carts: Cart;
}
