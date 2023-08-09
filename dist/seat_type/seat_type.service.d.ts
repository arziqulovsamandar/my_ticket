import { SeatType } from './models/seat_type.model';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
export declare class SeatTypeService {
    private readonly seatTypeModel;
    constructor(seatTypeModel: typeof SeatType);
    findAll(): Promise<SeatType[]>;
    findOne(id: number): Promise<SeatType>;
    create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType>;
    update(id: number, updateSeatTypeDto: UpdateSeatTypeDto): Promise<SeatType>;
    delete(id: number): Promise<void>;
}
