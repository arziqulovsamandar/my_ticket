import { EventType } from './models/event_type.model';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
export declare class EventTypeService {
    private readonly eventTypeModel;
    constructor(eventTypeModel: typeof EventType);
    findAll(): Promise<EventType[]>;
    findOne(id: number): Promise<EventType>;
    create(createEventTypeDto: CreateEventTypeDto): Promise<EventType>;
    update(id: number, updateEventTypeDto: UpdateEventTypeDto): Promise<EventType>;
    delete(id: number): Promise<void>;
}
