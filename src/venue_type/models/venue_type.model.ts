import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Venue } from '../../venue/models/venue.model';

interface VenueTypeAttributes {
  name: string;
  id: Number;
  venue_id: number;
}

@Table({ tableName: 'venue_type' })
export class VenueType extends Model<VenueType, VenueTypeAttributes> {
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

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  venue_id: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @HasMany(() => Venue)
  Venue_types: Venue[];
}
