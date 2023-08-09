import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType)
    private readonly venueTypeModel: typeof VenueType,
  ) {}

  async findAll(): Promise<VenueType[]> {
    return this.venueTypeModel.findAll();
  }

  async findOne(id: number): Promise<VenueType> {
    return this.venueTypeModel.findByPk(id);
  }

  async create(createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType> {
    return this.venueTypeModel.create(createVenueTypeDto);
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<VenueType> {
    const builder = await this.venueTypeModel.update(updateVenueTypeDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }


  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.venueTypeModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
