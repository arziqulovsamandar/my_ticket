import { HumanCategory } from './models/human_category.model';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
export declare class HumanCategoryService {
    private readonly humanCategoryModel;
    constructor(humanCategoryModel: typeof HumanCategory);
    findAll(): Promise<HumanCategory[]>;
    findOne(id: number): Promise<HumanCategory>;
    create(createHumanCategoryDto: CreateHumanCategoryDto): Promise<HumanCategory>;
    update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<HumanCategory>;
    delete(id: number): Promise<void>;
}
