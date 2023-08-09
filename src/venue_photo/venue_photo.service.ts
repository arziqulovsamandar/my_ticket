import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue_photo.model';

import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto)
    private readonly venuePhotoModel: typeof VenuePhoto,
  ) {}

  async findAll(): Promise<VenuePhoto[]> {
    return this.venuePhotoModel.findAll();
  }

  async findOne(id: number): Promise<VenuePhoto> {
    return this.venuePhotoModel.findByPk(id);
  }

  async create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto> {
    return this.venuePhotoModel.create(createVenuePhotoDto);
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<VenuePhoto> {
    const builder = await this.venuePhotoModel.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }


  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.venuePhotoModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue photo with id ${id}`);
    }
  }
}
