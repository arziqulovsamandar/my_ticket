import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';
import { BookingService } from './booking.service';
import { Cart } from '../cart/models/cart.model';
import { BookingController } from './booking.controller';

@Module({
  imports: [SequelizeModule.forFeature([Booking, Cart])],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService],
})
export class BookingModule {}
