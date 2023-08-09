import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';
import { Venue } from '../venue/models/venue.model';
import { SeatType } from '../seat_type/models/seat_type.model';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { CreateSeatDto } from './dto/create-seat.dto';

@Injectable()
export class SeatService {
  constructor(
    @InjectModel(Seat)
    private readonly seatModel: typeof Seat,
  ) {}

  async findAll(): Promise<Seat[]> {
    return this.seatModel.findAll({
      include: [
        {
          model: Venue,
        },
        {
          model: SeatType,
        },
      ],
    });
  }

  async findOne(id: number): Promise<Seat> {
    return this.seatModel.findByPk(id, {
      include: [
        {
          model: Venue,
        },
        {
          model: SeatType,
        },
      ],
    });
  }

  async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    return this.seatModel.create(createSeatDto);
  }

  async update(
    id: number,
    updateSeatDto: UpdateSeatDto,
  ): Promise<Seat> {
    const builder = await this.seatModel.update(
      updateSeatDto,
      {
        where: { id },
        returning: true,
      },
    );
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.seatModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete seat with id ${id}`);
    }
  }
}
