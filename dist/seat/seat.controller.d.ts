import { Seat } from './models/seat.model';
import { SeatService } from './seat.service';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { CreateSeatDto } from './dto/create-seat.dto';
export declare class SeatController {
    private readonly seatService;
    constructor(seatService: SeatService);
    findAll(): Promise<Seat[]>;
    findOne(id: number): Promise<Seat>;
    create(createSetDto: CreateSeatDto): Promise<Seat>;
    update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat>;
    delete(id: number): Promise<void>;
}
