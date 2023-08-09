import { Model } from 'sequelize-typescript';
import { EventType } from '../../event_type/models/event_type.model';
import { HumanCategory } from '../../human_category/models/human_category.model';
import { Venue } from '../../venue/models/venue.model';
import { Ticket } from '../../ticket/models/ticket.model';
interface EventAttributes {
    name: string;
    photo: string;
    start_date: string;
    start_time: string;
    finish_date: string;
    finish_time: string;
    info: string;
    event_type_id: number;
    human_category_id: number;
    venue_id: number;
    lang_id: bigint;
    release_date: string;
}
export declare class Event extends Model<Event, EventAttributes> {
    id: number;
    name: string;
    photo: string;
    start_date: string;
    start_time: string;
    finish_date: string;
    finish_time: string;
    info: string;
    event_type_id: number;
    event_types: EventType;
    human_category_id: number;
    human_categorys: HumanCategory;
    venue_id: number;
    venues: Venue;
    lang_id: bigint;
    release_date: string;
    tickets: Ticket[];
}
export {};
