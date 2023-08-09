import { Booking } from './models/booking.model';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    findAll(): Promise<Booking[]>;
    findOne(id: number): Promise<Booking>;
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    update(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking>;
    delete(id: number): Promise<void>;
}
