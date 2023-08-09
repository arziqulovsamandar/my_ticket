import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {Seat } from './models/seat.model';
import { SeatService } from './seat.service';
import { SeatType } from '../seat_type/models/seat_type.model';
import { Venue } from '../venue/models/venue.model';
import { SeatController } from './seat.controller';

@Module({
  imports: [SequelizeModule.forFeature([Seat, SeatType, Venue])],
  controllers: [SeatController],
  providers: [SeatService],
  exports: [SeatService],
})
export class SeatModule {}
