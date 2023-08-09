import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Seat } from '../../seat/models/seat.model';

interface SeatTypeAttributes {
  name: string;
}

@Table({ tableName: 'seat_type' })
export class SeatType extends Model<SeatType, SeatTypeAttributes> {
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

  @HasMany(() => Seat)
  seats: Seat[];
}
