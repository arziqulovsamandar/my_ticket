import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Role } from '../../roles/models/role.model';
import { AdminRoles } from '../../roles/models/admin-roles.model';

interface AdminAtr {
  name: string;
  login: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: string;
  hashed_refresh_token: string;
}

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, AdminAtr> {
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
  login: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_active: boolean;

  @Column({
    type: DataType.STRING,
  })
  is_creator: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @BelongsToMany(() => Role, () => AdminRoles)
  roles: Role[];
}
