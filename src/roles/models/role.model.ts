import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Admin } from '../../admin/models/admin.model';
import { AdminRoles } from './admin-roles.model';

interface RoleCreateAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreateAttrs> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  value: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => Admin, () => AdminRoles)
  admins: Admin[];
}
