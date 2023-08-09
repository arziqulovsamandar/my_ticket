import { Model } from 'sequelize-typescript';
import { Event } from '../../event/models/event.model';
interface HumanCategoryAttributes {
    name: string;
    start_age: string;
    finish_age: string;
    gender: string;
}
export declare class HumanCategory extends Model<HumanCategory, HumanCategoryAttributes> {
    id: number;
    name: string;
    start_age: string;
    finish_age: string;
    gender: string;
    events: Event[];
}
export {};
