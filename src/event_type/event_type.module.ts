import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventType } from './models/event_type.model';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';

@Module({
  imports: [SequelizeModule.forFeature([EventType, EventType])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
  exports: [EventTypeService],
})
export class EventTypeModule {}
