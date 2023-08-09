import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SeatType } from './models/seat_type.model';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(SeatType)
    private readonly seatTypeModel: typeof SeatType,
  ) {}

  async findAll(): Promise<SeatType[]> {
    return this.seatTypeModel.findAll();
  }

  async findOne(id: number): Promise<SeatType> {
    return this.seatTypeModel.findByPk(id);
  }

  async create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType> {
    return this.seatTypeModel.create(createSeatTypeDto);
  }

  async update(
    id: number,
    updateSeatTypeDto: UpdateSeatTypeDto,
  ): Promise<SeatType> {
    const builder = await this.seatTypeModel.update(
      updateSeatTypeDto,
      {
        where: { id },
        returning: true,
      },
    );
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.seatTypeModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete seat type with id ${id}`);
    }
  }
}
