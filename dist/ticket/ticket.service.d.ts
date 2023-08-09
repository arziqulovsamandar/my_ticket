import { Ticket } from './models/ticket.model';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketService {
    private readonly ticketModel;
    constructor(ticketModel: typeof Ticket);
    findAll(): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    create(createTicketDto: CreateTicketDto): Promise<Ticket>;
    update(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket>;
    delete(id: number): Promise<void>;
}
