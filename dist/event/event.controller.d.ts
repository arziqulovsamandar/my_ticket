import { Event } from './models/event.model';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    create(createEventDto: CreateEventDto): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<Event>;
    delete(id: number): Promise<void>;
}
