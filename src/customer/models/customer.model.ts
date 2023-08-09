import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Cart } from '../../cart/models/cart.model';
import { CustomerAddress } from '../../customer_address/models/customer_address.model';
import { CustomerCard } from '../../customer_card/models/customer_card.model';

interface CustomerAtr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date:Date;
  gender:number;
  lang_id:number;
  hashed_refresh_token:string
}

@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, CustomerAtr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.DATE,
  })
  birth_date: Date;

  @Column({
    type: DataType.SMALLINT,
  })
  gender: number;

  @Column({
    type: DataType.SMALLINT,
  })
  lang_id: number;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @HasMany(() => Cart)
  carts: Cart[];

  @HasMany(() => CustomerCard)
  customerCards: CustomerCard[];

  @HasMany(() => CustomerAddress)
  customerAddresss: CustomerAddress[];
}
