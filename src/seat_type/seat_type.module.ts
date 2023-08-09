import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeatType } from './models/seat_type.model';
import { SeatTypeService } from './seat_type.service';
import { SeatTypeController } from './seat_type.controller';

@Module({
  imports: [SequelizeModule.forFeature([SeatType])],
  controllers: [SeatTypeController],
  providers: [SeatTypeService],
  exports: [SeatTypeService],
})
export class Seat_typeModule {}
