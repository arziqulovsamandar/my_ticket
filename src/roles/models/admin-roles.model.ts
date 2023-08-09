import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { Admin } from '../../admin/models/admin.model';

@Table({ tableName: 'admin_roles', createdAt: false, updatedAt: false })
export class AdminRoles extends Model<AdminRoles> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Admin)
  @Column({ type: DataType.INTEGER })
  adminId: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;
}
