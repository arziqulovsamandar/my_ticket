import { Event } from './models/event.model';
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventDto } from './dto/create-event.dto';
export declare class EventService {
    private readonly eventModel;
    constructor(eventModel: typeof Event);
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    create(createEventDto: CreateEventDto): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<Event>;
    delete(id: number): Promise<void>;
}
