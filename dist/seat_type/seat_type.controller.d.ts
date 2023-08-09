import { SeatType } from './models/seat_type.model';
import { SeatTypeService } from './seat_type.service';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
export declare class SeatTypeController {
    private readonly seatTypeService;
    constructor(seatTypeService: SeatTypeService);
    findAll(): Promise<SeatType[]>;
    findOne(id: number): Promise<SeatType>;
    create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType>;
    update(id: number, updateSeatTypeDto: UpdateSeatTypeDto): Promise<SeatType>;
    delete(id: number): Promise<void>;
}
