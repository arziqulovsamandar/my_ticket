import { Ticket } from './models/ticket.model';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    findAll(): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    create(createTicketDto: CreateTicketDto): Promise<Ticket>;
    update(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket>;
    delete(id: number): Promise<void>;
}
