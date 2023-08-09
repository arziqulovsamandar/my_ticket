import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventType } from './models/event_type.model';
import { EventTypeService } from './event_type.service';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('event-types')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({ summary: 'All Event_Type' })
  @Get()
  async findAll(): Promise<EventType[]> {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Event_Type' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<EventType> {
    return this.eventTypeService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Event_Type' })
  @Post()
  async create(
    @Body() createEventTypeDto: CreateEventTypeDto,
  ): Promise<EventType> {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({ summary: 'Update Event_Type' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEventTypeDto: UpdateEventTypeDto,
  ): Promise<EventType> {
    return this.eventTypeService.update(id, updateEventTypeDto);
  }

  @ApiOperation({ summary: 'Delete event_Type' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.eventTypeService.delete(id);
  }
}
