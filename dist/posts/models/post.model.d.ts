import { Model } from 'sequelize-typescript';
import { Admin } from '../../admin/models/admin.model';
interface PostCreationAttribute {
    title: string;
    content: string;
    image: string;
    adminId: number;
}
export declare class Post extends Model<Post, PostCreationAttribute> {
    id: number;
    title: string;
    content: string;
    image: string;
    adminId: number;
    author: Admin;
}
export {};
