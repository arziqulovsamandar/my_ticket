import { EventType } from './models/event_type.model';
import { EventTypeService } from './event_type.service';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
export declare class EventTypeController {
    private readonly eventTypeService;
    constructor(eventTypeService: EventTypeService);
    findAll(): Promise<EventType[]>;
    findOne(id: number): Promise<EventType>;
    create(createEventTypeDto: CreateEventTypeDto): Promise<EventType>;
    update(id: number, updateEventTypeDto: UpdateEventTypeDto): Promise<EventType>;
    delete(id: number): Promise<void>;
}
