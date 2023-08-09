import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { EventService } from './event.service';
import { EventType } from '../event_type/models/event_type.model';
import { HumanCategory } from '../human_category/models/human_category.model';
import { Venue } from '../venue/models/venue.model';
import { EventController } from './event.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([Event, EventType, HumanCategory, Venue]),
  ],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
