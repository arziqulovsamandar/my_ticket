import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { CreateVenueDto } from './dto/create-venue.dto';

@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue)
    private readonly venueModel: typeof Venue,
  ) {}

  async findAll(): Promise<Venue[]> {
    return this.venueModel.findAll({
      include: { all: true },
    });
  }

  async findOne(id: string): Promise<Venue> {
    return this.venueModel.findByPk(id, {
      include: [{ all: true }],
    });
  }

  async create(createVenueDto: CreateVenueDto): Promise<Venue> {
    return this.venueModel.create(createVenueDto, {
      include: [{ all: true }],
    });
  }

  async update(
    id: number,
    updateVenueDto: UpdateVenueDto,
  ): Promise<Venue> {
    const builder = await this.venueModel.update(
      updateVenueDto,
      {
        where: { id },
        returning: true,
      },
    );
    return builder[1][0].dataValues;
  }

  async delete(id: string): Promise<void> {
    const numRowsDeleted = await this.venueModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue with id ${id}`);
    }
  }
}
