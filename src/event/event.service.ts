import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event)
    private readonly eventModel: typeof Event,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.eventModel.findAll({
      include: { all: true },
  });
  }

  async findOne(id: number): Promise<Event> {
    return this.eventModel.findByPk(id);
  }

  async create(createEventDto: CreateEventDto): Promise<Event> {
    return this.eventModel.create(createEventDto);
  }


  async update(
    id: number,
    updateEventDto: UpdateEventDto,
  ): Promise<Event> {
    const event = await this.eventModel.update(
      updateEventDto,
      {
        where: { id },
        returning: true,
      },
    );
    return event[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.eventModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete event with id ${id}`);
    }
  }
}
