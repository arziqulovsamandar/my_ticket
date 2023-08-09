import { Table, Model, Column, DataType, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { VenueType } from '../../venue_type/models/venue_type.model';
import { Seat } from '../../seat/models/seat.model';
import { Event } from '../../event/models/event.model';
import { VenuePhoto } from '../../venue_photo/models/venue_photo.model';


interface VenueAttributes {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_type_id: number;
  schema: string;
  region_id: string;
  district_id: string;
}

@Table({ tableName: 'venue' })
export class Venue extends Model<Venue, VenueAttributes> {
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
  address: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
  })
  site: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ForeignKey(() => VenueType)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  venue_type_id: number;

  @BelongsTo(() => VenueType)
  venue_types: VenueType;

  @Column({
    type: DataType.STRING,
  })
  schema: string;

  @Column({
    type: DataType.STRING,
  })
  region_id: string;

  @Column({
    type: DataType.STRING,
  })
  district_id: string;

  @HasMany(() => Seat)
  seats: Seat[];

  @HasMany(() => Event)
  events: Event[];

  @HasMany(() => VenueType)
  Venue_types: VenueType[];

  @HasMany(() => VenuePhoto)
  venue_photos: VenuePhoto[];
}

