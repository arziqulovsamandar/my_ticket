import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking)
    private readonly bookingModel: typeof Booking,
  ) {}

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Booking> {
    return this.bookingModel.findByPk(id);
  }

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingModel.create(createBookingDto);
  }

  async update(
    id: number,
    updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    const booking = await this.bookingModel.update(updateBookingDto, {
      where: { id },
      returning: true,
    });
    return booking[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.bookingModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
