import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventType } from './models/event_type.model';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { CreateEventTypeDto } from './dto/create-event_type.dto';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType)
    private readonly eventTypeModel: typeof EventType,
  ) {}

  async findAll(): Promise<EventType[]> {
    return this.eventTypeModel.findAll({
      include: [
        {
          model: EventType,
          as: 'parent_event_type',
        },
      ],
    });
  }

  async findOne(id: number): Promise<EventType> {
    return this.eventTypeModel.findByPk(id, {
      include: [
        {
          model: EventType,
          as: 'parent_event_type',
        },
      ],
    });
  }

  async create(createEventTypeDto: CreateEventTypeDto): Promise<EventType> {
    return this.eventTypeModel.create(createEventTypeDto);
  }

  async update(
    id: number,
    updateEventTypeDto: UpdateEventTypeDto,
  ): Promise<EventType> {
    const eventtype = await this.eventTypeModel.update(updateEventTypeDto, {
      where: { id },
      returning: true,
    });
    return eventtype[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.eventTypeModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete event type with id ${id}`);
    }
  }
}
