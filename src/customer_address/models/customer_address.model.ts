import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Customer } from '../../customer/models/customer.model';

interface CustomerAddressAttributes {
  name: string;
  country_id: string;
  region_id: string;
  distirct_id: string;
  street: string;
  house: string;
  flat: string;
  location: string;
  post_index: string;
  info: string;
  customer_id: number;
}

@Table({ tableName: 'customer_address' })
export class CustomerAddress extends Model<
  CustomerAddress,
  CustomerAddressAttributes
> {
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
  country_id: string;

  @Column({
    type: DataType.STRING,
  })
  region_id: string;

  @Column({
    type: DataType.STRING,
  })
  distirct_id: string;

  @Column({
    type: DataType.STRING,
  })
  street: string;

  @Column({
    type: DataType.STRING,
  })
  house: string;

  @Column({
    type: DataType.STRING,
  })
  flat: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
  })
  post_index: string;

  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  customer_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;
}
