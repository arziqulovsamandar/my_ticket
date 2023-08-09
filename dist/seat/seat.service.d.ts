import { Seat } from './models/seat.model';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { CreateSeatDto } from './dto/create-seat.dto';
export declare class SeatService {
    private readonly seatModel;
    constructor(seatModel: typeof Seat);
    findAll(): Promise<Seat[]>;
    findOne(id: number): Promise<Seat>;
    create(createSeatDto: CreateSeatDto): Promise<Seat>;
    update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat>;
    delete(id: number): Promise<void>;
}
