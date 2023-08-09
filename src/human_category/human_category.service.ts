import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HumanCategory } from './models/human_category.model';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory)
    private readonly humanCategoryModel: typeof HumanCategory,
  ) {}

  async findAll(): Promise<HumanCategory[]> {
    return this.humanCategoryModel.findAll();
  }

  async findOne(id: number): Promise<HumanCategory> {
    return this.humanCategoryModel.findByPk(id);
  }

  async create(createHumanCategoryDto: CreateHumanCategoryDto): Promise<HumanCategory> {
    return this.humanCategoryModel.create(createHumanCategoryDto);
  }

  async update(
    id: number,
    updateHumanCategoryDto: UpdateHumanCategoryDto,
  ): Promise<HumanCategory> {
    const builder = await this.humanCategoryModel.update(updateHumanCategoryDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.humanCategoryModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete human category with id ${id}`);
    }
  }
}
