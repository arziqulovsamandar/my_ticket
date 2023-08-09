import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Venue } from '../../venue/models/venue.model';
import { SeatType } from '../../seat_type/models/seat_type.model';
import { Ticket } from '../../ticket/models/ticket.model';

interface SeatAttributes {
  sector: string;
  row_number: string;
  number: string;
  venue_id: number;
  seat_type_id: number;
  location_in_schema: boolean;
}

@Table({ tableName: 'seat' })
export class Seat extends Model<Seat, SeatAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  
  @Column({
    type: DataType.STRING,
  })
  sector: string;

  @Column({
    type: DataType.STRING,
  })
  row_number: string;

  @Column({
    type: DataType.STRING,
  })
  number: string;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  venue_id: number;

  @BelongsTo(() => Venue)
  venues: Venue;

  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  seat_type_id: number;

  @BelongsTo(() => SeatType)
  seat_types: SeatType;

  @Column({
    type: DataType.BOOLEAN,
  })
  seat_location_in_schema: boolean;

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
