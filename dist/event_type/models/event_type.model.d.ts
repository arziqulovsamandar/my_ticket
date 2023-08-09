import { Model } from 'sequelize-typescript';
import { Event } from '../../event/models/event.model';
interface EventTypeAttributes {
    name: string;
    parent_event_type_id: number;
}
export declare class EventType extends Model<EventType, EventTypeAttributes> {
    id: number;
    name: string;
    parent_event_type_id: number;
    parent_event_type: EventType;
    events: Event[];
}
export {};
