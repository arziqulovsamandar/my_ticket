import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Customer } from '../../customer/models/customer.model';

interface CustomerCardAttributes {
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
  customer_id: number;
}

@Table({ tableName: 'customer_card' })
export class CustomerCard extends Model<CustomerCard, CustomerCardAttributes> {
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
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  number: string;

  @Column({
    type: DataType.STRING,
  })
  year: string;

  @Column({
    type: DataType.STRING,
  })
  month: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_main: boolean;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  customer_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;
}
