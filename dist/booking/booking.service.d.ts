import { Booking } from './models/booking.model';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
export declare class BookingService {
    private readonly bookingModel;
    constructor(bookingModel: typeof Booking);
    findAll(): Promise<Booking[]>;
    findOne(id: number): Promise<Booking>;
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    update(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking>;
    delete(id: number): Promise<void>;
}
