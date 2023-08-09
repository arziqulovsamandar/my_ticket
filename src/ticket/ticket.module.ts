import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket } from './models/ticket.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from '../event/models/event.model';
import { Seat } from '../seat/models/seat.model';
import { TicketController } from './ticket.controller';

@Module({
  imports: [SequelizeModule.forFeature([Ticket, Event, Seat])],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService],
})
export class TicketModule {}
