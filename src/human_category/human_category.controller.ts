import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HumanCategory } from './models/human_category.model';
import { HumanCategoryService } from './human_category.service';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('human-categories')
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({ summary: 'All Human_Category' })
  @Get()
  async findAll(): Promise<HumanCategory[]> {
    return this.humanCategoryService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Human_Category' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<HumanCategory> {
    return this.humanCategoryService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Human_Category' })
  @Post()
  async create(
    @Body() createHumanCategoryDto: CreateHumanCategoryDto,
  ): Promise<HumanCategory> {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @ApiOperation({ summary: 'Update Human_Category' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto,
  ): Promise<HumanCategory> {
    return this.humanCategoryService.update(id, updateHumanCategoryDto);
  }

  @ApiOperation({ summary: 'Delete Human_Category' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.humanCategoryService.delete(id);
  }
}
