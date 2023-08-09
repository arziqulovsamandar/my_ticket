import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Event } from './models/event.model';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: 'All Event' })
  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Event' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Event' })
  @Post()
  async create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventService.create(createEventDto);
  }

  @ApiOperation({ summary: 'Update Event' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<Event> {
    return this.eventService.update(id, updateEventDto);
  }

  @ApiOperation({ summary: 'Delete Event' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.eventService.delete(id);
  }
}
