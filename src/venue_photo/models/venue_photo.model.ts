import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Venue } from '../../venue/models/venue.model';

interface VenuePhotoAttributes {
  venue_id: number;
  url: string;
}

@Table({ tableName: 'venue_photo' })
export class VenuePhoto extends Model<VenuePhoto, VenuePhotoAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  venue_id: number;

  @BelongsTo(() => Venue)
  venues: Venue;

  @Column({
    type: DataType.STRING,
  })
  url: string;
}
